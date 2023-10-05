import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';

export interface BaseRepositoryInterface<T> {
  create(data: DeepPartial<T>): T;
  findOneById(id: string): Promise<T | null>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
}

import { FindOptionsWhere, Repository } from 'typeorm';

export abstract class BaseRepository<
  T extends Record<string, any> & AbstractEntity,
> implements BaseRepositoryInterface<T>
{
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public create(data: DeepPartial<T>): T {
    return this.entity.create(data);
  }

  public async findOneById(id: string): Promise<T | null> {
    const options: FindOneOptions<T> = {
      where: {
        id: id,
      } as FindOptionsWhere<T>,
    };
    return await this.entity.findOne(options);
  }

  public async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.entity.find(options);
  }
}
