import { Injectable } from '@nestjs/common';
import { AddressEntity } from '../entities/address.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AddressRepository extends Repository<AddressEntity> {
  constructor(private dataSource: DataSource) {
    super(AddressEntity, dataSource.createEntityManager());
  }
}
