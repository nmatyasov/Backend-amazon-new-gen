import { Injectable } from '@nestjs/common';
import { VariationEntity } from '../entities/variation.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class VariationOptionRepository extends Repository<VariationEntity> {
  constructor(private dataSource: DataSource) {
    super(VariationEntity, dataSource.createEntityManager());
  }
}
