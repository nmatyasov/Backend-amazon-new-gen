import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { OrderEntity } from './order.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'order_status' })
export class OrderStatusEntity extends AbstractEntity {
  @Column({ name: 'status_name', unique: true })
  country_name: string;

  @OneToMany(() => OrderEntity, (order) => order.order_status)
  order: OrderEntity[];
}
