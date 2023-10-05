import { Injectable } from '@nestjs/common';
import { credentialsGoogleUserDto } from './dto/credentialsUser.dto';
import { UsersService } from '@users/users.service';
import { CreateUserDto } from '@users/dto/user.create.dto';

import { UsersEntity } from '@users/entites/users.entity';

@Injectable()
export class AuthGoogleService {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Поиск в БД пользователя от Google
   * Если пользователь не найдет тихо создаем нового с подтвержденной почтой
   * и возвращаем в котроллер
   * @param {credentialsGoogleUserDto} candidate регистрационная информация пользователя
   * @returns {UserDto} Promise с результатом регистрации
   */

  async validateGoogleUserOrAddNewSilent(
    candidate: credentialsGoogleUserDto,
  ): Promise<UsersEntity> {
    const { email, avatar, firstname, lastname } = candidate;

    let user: UsersEntity = await this.usersService.findOne({ email });

    if (!user) {
      const createUserDto: CreateUserDto = {
        email,
        firstname,
        lastname,
        avatar,
        password: `${firstname}${email}`,
      };

      user = await this.usersService.create(createUserDto);
      await this.usersService.markEmailAsConfirmed(email);
    }

    return user;
  }

  /*   async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  } */
}
