import { Injectable } from '@nestjs/common';
import { CategoryEntity } from '../entities/category.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CategoryRepository extends Repository<CategoryEntity> {
  constructor(private dataSource: DataSource) {
    super(CategoryEntity, dataSource.createEntityManager());
  }
}
