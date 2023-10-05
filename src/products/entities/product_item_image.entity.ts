import { AbstractEntity } from '@app/lib/src/database/abstract.entity';

import { Entity, ManyToOne } from 'typeorm';
import { GoodsImagesEntity } from './goods_images.entity';
import { ProductItemEntity } from './product_item.entity';

@Entity({ name: 'product_item_image' })
export class ProductItemImageEntity extends AbstractEntity {
  @ManyToOne(() => ProductItemEntity, (product_item) => product_item.id)
  product_item: ProductItemEntity;

  @ManyToOne(() => GoodsImagesEntity, (image) => image.id)
  image: GoodsImagesEntity;
}
