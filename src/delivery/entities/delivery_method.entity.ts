import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { OrderEntity } from '@order/entities/order.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'delivery_method' })
export class DeliveryMethodEntity extends AbstractEntity {
  @Column({ name: 'delivery_method', unique: true })
  delivery_method: string;

  @OneToMany(() => OrderEntity, (order) => order.delivery_method)
  order: OrderEntity[];
}
