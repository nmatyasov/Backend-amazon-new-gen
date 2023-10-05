import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { UsersEntity } from '@users/entites/users.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'tokens' })
export class TokensEntity extends AbstractEntity {
  @Column({ name: 'token' })
  refreshToken: string;

  @Column({ name: 'fingerprint' })
  fingerprint: string;

  @Column({ name: 'expiresIn' })
  expiresIn: number;

  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;
}
