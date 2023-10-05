import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@users/dto/user.create.dto';
import { UsersEntity } from '@users/entites/users.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersRepository extends Repository<UsersEntity> {
  constructor(private dataSource: DataSource) {
    super(UsersEntity, dataSource.createEntityManager());
  }
  public async findById(id: string): Promise<UsersEntity> {
    return this.findOne({ where: { id } });
  }
  public async createUser(createUserDto: CreateUserDto): Promise<UsersEntity> {
    const { firstname, lastname, email, password } = createUserDto;
    const user = new UsersEntity();
    user.firstName = firstname;
    user.lastName = lastname;
    user.email = email;
    user.password = password;

    await this.save(user);
    return user;
  }
}
