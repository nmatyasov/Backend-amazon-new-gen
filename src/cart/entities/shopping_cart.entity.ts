import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { UsersEntity } from '@users/entites/users.entity';

import { Column, Entity, ManyToOne, Unique } from 'typeorm';

@Entity({ name: 'shopping_cart' })
export class ShoppingCartEntity extends AbstractEntity {
  @Column({ name: 'name', default: 'Main cart' })
  name: string;
  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;
}
