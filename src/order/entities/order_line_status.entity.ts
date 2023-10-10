import { AbstractEntity } from '@app/lib/src/database/abstract.entity';

import { Column, Entity, OneToMany } from 'typeorm';
import { OrderLineEntity } from '@order/entities/order_line.entity';

@Entity({ name: 'order_line_status' })
export class OrderLineStatusEntity extends AbstractEntity {
  @Column({ name: 'line_status_name', unique: true })
  line_status_name: string;

  @OneToMany(() => OrderLineEntity, (order) => order.order_line_status)
  order: OrderLineEntity[];
}
