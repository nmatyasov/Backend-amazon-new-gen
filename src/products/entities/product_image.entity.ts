import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { ProductEntity } from './product.entity';
import { Entity, ManyToOne } from 'typeorm';
import { GoodsImagesEntity } from './goods_images.entity';

@Entity({ name: 'product_image' })
export class ProductImageEntity extends AbstractEntity {
  @ManyToOne(() => ProductEntity, (product) => product.id)
  product: ProductEntity;

  @ManyToOne(() => GoodsImagesEntity, (image) => image.id)
  image: GoodsImagesEntity;
}
