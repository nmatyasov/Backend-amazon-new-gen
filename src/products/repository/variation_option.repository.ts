import { Injectable } from '@nestjs/common';
import { VariationOptionEntity } from '../entities/variation_option.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class VariationOptionRepository extends Repository<VariationOptionEntity> {
  constructor(private dataSource: DataSource) {
    super(VariationOptionEntity, dataSource.createEntityManager());
  }
}
