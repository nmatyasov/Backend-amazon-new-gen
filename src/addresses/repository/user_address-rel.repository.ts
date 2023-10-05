import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserAddressEntity } from '../entities/user_address.entity';

@Injectable()
export class UserAddressRepository extends Repository<UserAddressEntity> {
  constructor(private dataSource: DataSource) {
    super(UserAddressEntity, dataSource.createEntityManager());
  }
}
