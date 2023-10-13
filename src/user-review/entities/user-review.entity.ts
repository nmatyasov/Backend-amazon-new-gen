import { AbstractEntity } from '@app/lib/src/database/abstract.entity';

import { Column, Entity, ManyToOne } from 'typeorm';
import { ProductItemEntity } from '@product/entities/product_item.entity';
import { UsersEntity } from '@users/entites/users.entity';
import { OrderLineEntity } from '@order/entities/order_line.entity';

@Entity({ name: 'user_review' })
export class UserReviewEntity extends AbstractEntity {
  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;

  @ManyToOne(
    () => OrderLineEntity,
    (ordered_product_id) => ordered_product_id.id,
  )
  ordered_product_id: OrderLineEntity;

  @Column({ name: 'rating_value' })
  rating_value: number;

  @Column({ name: 'comment' })
  comment: string;
}
