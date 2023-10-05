import { Injectable } from '@nestjs/common';
import { ProductConfigurationEntity } from '../entities/product_configuration.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CategoryRepository extends Repository<ProductConfigurationEntity> {
  constructor(private dataSource: DataSource) {
    super(ProductConfigurationEntity, dataSource.createEntityManager());
  }
}
