import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { RefreshTokenSessionDto } from './dto/refreshTokenSession.dto';

import { UsersService } from '@users/users.service';

import { UsersEntity } from '@users/entites/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TokensRepository } from '@refresh-sessions/tokens.repository';
import { TokensEntity } from '@refresh-sessions/entities/tokens.entity';
import { FindManyOptions, FindOptionsWhere } from 'typeorm';

@Injectable()
export class RefreshSessionsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
    @InjectRepository(TokensRepository)
    private tokensRepository: TokensRepository,
  ) {}

  /**
   * Запись в БД RefreshToken
   * @param {RefreshTokenSessionDto}   Идентификатор пользователя/token/fingerprint браузера пользователя
   * @returns Promise Идентификатор сохраненного token
   */
  async saveToken(
    refreshTokenSessionDto: RefreshTokenSessionDto,
  ): Promise<string> {
    const { userId, token, fingerprint, expiresIn } = refreshTokenSessionDto;

    /* Проверяем не истек ли срок годности токена, если истек то удаляем его и выбрасываем ошибку*/
    if (!this.tokenExpiredValidation(userId, token)) {
      await this.removeToken(userId, token);
      throw new HttpException('Session expired', HttpStatus.UNAUTHORIZED);
    }

    /*удаляем refreshToken с существующим fingerprint */
    const findOptions = {
      where: {
        userId,
        refreshToken: token,
      },
    };

    await this.tokensRepository.delete(
      findOptions as FindOptionsWhere<TokensEntity>,
    );

    /*Чтобы не было превышений подключений */
    const findOptionsByUser = {
      where: {
        userId,
      },
    };

    const cntConnection: number =
      (await this.tokensRepository.count(
        findOptionsByUser as FindManyOptions<TokensEntity>,
      )) + 1;

    const cntMaxLimitConnection = parseInt(
      this.configService.getOrThrow<string>('MAX_LIMIT_CONNECTIONS'),
      10,
    );

    if (cntConnection >= cntMaxLimitConnection) {
      await this.clearQueueTokens(userId);
    }

    const newToken = await this.tokensRepository.save({
      userId,
      refreshToken: token,
      fingerprint,
      expiresIn,
    });

    return newToken.id;
  }
  /**
   * удаляем refreshToken по принципу FIFO
   * @param {string} userId идентификатор пользователя
   *
   */
  async clearQueueTokens(userId: string): Promise<void> {
    const findOptions: FindManyOptions = {
      where: {
        userId,
      },
    };

    const olderToken: TokensEntity[] =
      await this.tokensRepository.find(findOptions);

    /*TODO */
    /*Цикл по ключам и удаение пророченных */
  }

  /**
   * Удаление в БД RefreshToken
   * @param  {ObjectId} userId  Идентификатор пользователя
   *  @param  {string} refreshToken  refresh token
   * @returns Promise
   */
  async removeToken(userId: string, refreshToken: string): Promise<void> {
    const findOptions = {
      where: {
        userId,
        refreshToken,
      },
    };

    await this.tokensRepository.delete(
      findOptions as FindOptionsWhere<TokensEntity>,
    );
  }

  /**
   * Проверяет наличие и срок годности refreshToken пользователя
   * @param {string} userId идентификатор пользователя
   * @param {string} refreshToken refreshToken
   * @returns {Promise<boolean>} если true валидный иначе false
   */
  async tokenExpiredValidation(
    userId: string,
    refreshToken: string,
  ): Promise<boolean> {
    console.log(refreshToken);
    const token: TokensEntity = await this.tokensRepository.findOne({
      where: { /*userId,*/ refreshToken },
    });
    /* Вдруг нет такого токена */
    if (!token) {
      throw new HttpException('Invalid credantials', HttpStatus.UNAUTHORIZED);
    }
    /*не истек ли срок годности токена */
    return Date.now() >= token.expiresIn * 1000 ? true : false;
  }

  /**
   * Удаляем все токены в БД (нас хакнули, всех за борт)
   * @returns {Promise<void>}
   */
  async panic(): Promise<void> {
    /* this.tokensRepository.delete({}, function (err: Error) {
      if (err) {
        return console.log(err);
      }
    });*/
  }

  /**
   * Удаляем все refreshTokens пользователя, те заставляем его перелогиниться со всех устройств
   * @param {string} userId идентификатор пользователя
   */

  async removeAllTokensByUserId(userId: string): Promise<void> {
    /* this.refreshSessionModel.deleteMany(
      { userId: userId },
      function (err: Error) {
        if (err) {
          return console.log(err);
        }
      },
    );*/
  }

  /**
   * Поиск пользователя с проверкой валидности RefreshToken
   * @param {string} refreshToken из заголовка запроса
   * @param {any} options праметры для поиcка в БД, обычно username
   * @returns  {UsersEntity} Promise single UserDto
   */
  async getUserIfRefreshTokenMatches(
    refreshToken: string,
    userId: string,
  ): Promise<UsersEntity> {
    const user = await this.userService.findById(userId);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isRefreshTokenValid = this.tokenExpiredValidation(
      user.id,
      refreshToken,
    );

    if (isRefreshTokenValid) {
      return user;
    }
  }
}
