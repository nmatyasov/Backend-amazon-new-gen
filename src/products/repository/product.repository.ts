import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../entities/product.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProductRepository extends Repository<ProductEntity> {
  constructor(private dataSource: DataSource) {
    super(ProductEntity, dataSource.createEntityManager());
  }
}
