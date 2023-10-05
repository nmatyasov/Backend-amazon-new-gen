import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { ProductItemEntity } from './product_item.entity';
import { VariationOptionEntity } from './variation_option.entity';
import { Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'product_configuration' })
export class ProductConfigurationEntity extends AbstractEntity {
  @ManyToOne(() => ProductItemEntity, (product_item) => product_item.id)
  product_item: ProductItemEntity;

  @ManyToOne(
    () => VariationOptionEntity,
    (variation_option) => variation_option.id,
  )
  variation_option: VariationOptionEntity;
}
