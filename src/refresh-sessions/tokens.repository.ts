import { Injectable } from '@nestjs/common';
import { TokensEntity } from '@refresh-sessions/entities/tokens.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TokensRepository extends Repository<TokensEntity> {
  constructor(private dataSource: DataSource) {
    super(TokensEntity, dataSource.createEntityManager());
  }
  public async findById(id: string): Promise<TokensEntity> {
    return this.findOne({ where: { id } });
  }
}
