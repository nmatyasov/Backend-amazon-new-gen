import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { UsersEntity } from '@users/entites/users.entity';

import { Column, Entity, ManyToOne, Unique } from 'typeorm';

@Entity({ name: 'shopping_cart' })
@Unique('index_cartname_user', ['user', 'cartname'])
export class ShoppingCartEntity extends AbstractEntity {
  @Column({ name: 'cartname', default: 'Main cart' })
  cartname: string;
  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;
}
