import { AbstractEntity } from '@app/lib/src/database/abstract.entity';

import { ShoppingCartEntity } from './shopping_cart.entity';

import { Column, Entity, ManyToOne } from 'typeorm';
import { ProductItemEntity } from '@product/entities/product_item.entity';

@Entity({ name: 'shopping_cart_item' })
export class ShoppingCartItemEntity extends AbstractEntity {
  @ManyToOne(() => ShoppingCartEntity, (cart) => cart.id)
  cart: ShoppingCartEntity;

  @ManyToOne(() => ProductItemEntity, (product_item) => product_item.id)
  product_item: ProductItemEntity;

  @Column({ name: 'qty' })
  qty: number;
}
