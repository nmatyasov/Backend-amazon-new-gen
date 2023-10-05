import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@users/dto/user.create.dto';
import { compare } from 'bcrypt';
import { credentialsUserDto } from '@auth/dto/credentialsUser.dto';
import { ConfigService } from '@nestjs/config';

import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '@users/entites/users.entity';
import { UsersRepository } from '@users/users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}
  /**
   * Поиск пользователя по email, refreshToken, идентификатору пользователя
   * @param {any} options параметры поиска
   * @returns {UserEntity} Promise single UserEntity
   */
  //поиск пользователя в БД
  async findOne(options?: object): Promise<UsersEntity> {
    return await this.usersRepository.findOne(options);
  }

  /**
   * Поиск пользователя по идентификатору пользователя
   * @param {ObjectId}  параметры поиска
   * @returns {UserEntity} Promise single UserEntity
   */
  async findById(id: string): Promise<UsersEntity> {
    return await this.usersRepository.findById(id);
  }
  /**
   * Поиск пользователя по email и password
   * @param {string} email пользователя
   * @param {string} password пользователя
   * @returns {UserEntity} Promise single UserEntity
   */
  async findByLogin({
    email,
    password,
  }: credentialsUserDto): Promise<UsersEntity> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const areEqual = await compare(password, user.password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  /**
   * Создание нового пользователя, с проверкой существования в БД (username & email уникальны)
   * @param {CreateUserDto} createUserDto параметны нового пользователя
   * @returns {UserEntity} Promise UserEntity новый пользователь
   */

  async create(createUserDto: CreateUserDto): Promise<UsersEntity> {
    const { firstname, lastname, password, email } = createUserDto;

    const emailExists = await this.usersRepository.findOne({
      where: { email },
    });
    if (emailExists) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }

    const user = this.usersRepository.save({
      firstname,
      lastname,
      password,
      email,
    });

    return user;
  }

  /**
   * Запись отметки что почта подтверждена
   * @param {string}email
   * @returns  {void} Promise
   */

  async markEmailAsConfirmed(email: string): Promise<UsersEntity> {
    const user = await this.usersRepository.findOne({
      where: { email },
    });
    if (!user) {
      throw new HttpException('Invalid credantials', HttpStatus.BAD_REQUEST);
    }

    return await this.usersRepository.save({
      id: user.id,
      isEmailConfirmed: true,
    });
  }

  /**
   * Добавление аватара пользователя
   * @param {string} userId
   * @param {string} path путь к файлу
   * @returns  {string} сетевой путь к файлу
   */

  async setAvatar(userId: string, filename: string): Promise<UsersEntity> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new HttpException('Invalid credantials', HttpStatus.BAD_REQUEST);
    }
    const SERVER_URL: string =
      this.configService.get<string>('SERVER_URL') + '/';
    user.avatar = `${SERVER_URL}${filename}`;
    return await this.usersRepository.save({ id: userId, avatar: filename });
  }
}
