import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { UsersEntity } from '@users/entites/users.entity';
import { OrderStatusEntity } from './order_status.entity';

import { Column, Entity, ManyToOne } from 'typeorm';
import { DeliveryMethodEntity } from '@delivery/entities/delivery_method.entity';
import { PaymentUserMethodEntity } from 'src/payment/entities/payment_user_method.entity';

@Entity({ name: 'order' })
export class OrderEntity extends AbstractEntity {
  @Column({})
  order_date: Date;
  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;

  @ManyToOne(
    () => PaymentUserMethodEntity,
    (payment_user_method) => payment_user_method.id,
  )
  payment_user_method: PaymentUserMethodEntity;

  @Column({})
  shipping_address: string;
  @ManyToOne(
    () => DeliveryMethodEntity,
    (delivery_method) => delivery_method.id,
  )
  delivery_method: DeliveryMethodEntity;
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  order_total: number;
  @ManyToOne(() => OrderStatusEntity, (order_status) => order_status.id)
  order_status: OrderStatusEntity;
}
