import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { UsersEntity } from '@users/entites/users.entity';
import { OrderStatusEntity } from './order_status.entity';

import { Column, Entity, ManyToOne } from 'typeorm';
import { DeliveryMethodEntity } from '@delivery/entities/delivery_method.entity';
import { PaymentUserMethodEntity } from 'src/payment/entities/payment_user_method.entity';

@Entity({ name: 'order' })
export class OrderEntity extends AbstractEntity {
  @Column({
    type: 'date',
    name: 'order_date',
    transformer: {
      from: (value: string) => new Date(value),
      to: (value: Date) => value.toISOString().slice(0, 10), // format the Date to YYYY-MM-DD
    },
  })
  order_date: Date;

  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;

  @Column({ name: 'order_number' })
  order_number: number;

  @ManyToOne(
    () => PaymentUserMethodEntity,
    (payment_user_method) => payment_user_method.id,
  )
  payment_user_method: PaymentUserMethodEntity;

  @Column({ name: 'unit_number' })
  public unit_number: string;
  @Column({ name: 'street_number' })
  public street_number: string;
  @Column({ name: 'address_line1' })
  public address_line1: string;
  @Column({ name: 'address_line2' })
  public address_line2: string;
  @Column({ name: 'city' })
  public city: string;
  @Column({ name: 'region' })
  public region: string;
  @Column({ name: 'postal_code' })
  public postal_code: string;
  @Column({ name: 'country' })
  country: string;
  @Column({ name: 'phone' })
  phone: string;

  @ManyToOne(
    () => DeliveryMethodEntity,
    (delivery_method) => delivery_method.id,
  )
  delivery_method: DeliveryMethodEntity;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  order_total: number;
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  order_subtotal: number;

  @ManyToOne(() => OrderStatusEntity, (order_status) => order_status.id)
  order_status: OrderStatusEntity;
}
