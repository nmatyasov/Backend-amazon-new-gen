import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { CategoryEntity } from './category.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ProductImageEntity } from './product_image.entity';
import { BrandEntity } from '@product/entities/brand.entity';

@Entity({ name: 'product' })
export class ProductEntity extends AbstractEntity {
  @Column({ name: 'name', unique: true })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @ManyToOne(() => CategoryEntity, (category) => category.id)
  category: CategoryEntity;

  @ManyToOne(() => BrandEntity, (brand) => brand.id)
  brand: BrandEntity;

  @OneToMany(() => ProductImageEntity, (product_image) => product_image.product)
  product_image: ProductImageEntity[];

  @Column({ name: 'is_draft', default: true })
  id_draft: boolean;
}
