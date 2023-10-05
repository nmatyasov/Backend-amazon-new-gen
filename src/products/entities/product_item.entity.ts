import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { ProductEntity } from './product.entity';
import { ProductConfigurationEntity } from './product_configuration.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ProductItemImageEntity } from './product_item_image.entity';
import { OrderLineEntity } from '@order/entities/order_line.entity';

export enum SaleStatus {
  ACTIVE = '',
  STOCK_OF_OUT = 'Stock of out',
  SALE = 'Sale',
}

@Entity({ name: 'product_item' })
export class ProductItemEntity extends AbstractEntity {
  @Column({ name: 'SKU', unique: true })
  SKU: string;

  @Column({ name: 'qty_in_stock' })
  qty_in_stock: number;

  @ManyToOne(() => ProductEntity, (product) => product.id)
  product: ProductEntity;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'old_price', default: 0 })
  old_price: number;

  @Column({ name: 'is_draft', default: true })
  id_draft: boolean;

  @Column({
    type: 'enum',
    enum: SaleStatus,
    default: SaleStatus.ACTIVE,
    nullable: true,
  })
  sale_status?: string;

  @OneToMany(
    () => ProductConfigurationEntity,
    (product_configuration) => product_configuration.product_item,
  )
  product_configuration: ProductConfigurationEntity[];

  @OneToMany(
    () => ProductItemImageEntity,
    (product_item_image) => product_item_image.product_item,
  )
  product_item_image: ProductItemImageEntity[];

  @OneToMany(() => OrderLineEntity, (order_line) => order_line.product_item)
  order_line: OrderLineEntity[];
}
