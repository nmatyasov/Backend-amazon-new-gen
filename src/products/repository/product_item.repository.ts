import { Injectable } from '@nestjs/common';
import { ProductItemEntity } from '../entities/product_item.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProductItemRepository extends Repository<ProductItemEntity> {
  constructor(private dataSource: DataSource) {
    super(ProductItemEntity, dataSource.createEntityManager());
  }
}
