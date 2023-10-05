import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { OrderEntity } from './order.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { ProductItemEntity } from '@product/entities/product_item.entity';

@Entity({ name: 'order_line' })
export class OrderLineEntity extends AbstractEntity {
  @ManyToOne(() => OrderEntity, (order) => order.id)
  order: OrderEntity;
  @ManyToOne(() => ProductItemEntity, (product_item) => product_item.id)
  product_item: ProductItemEntity;
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  priceBase: number;
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  qty: number;
}
