import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { ProductEntity } from './product.entity';
import { VariationEntity } from './variation.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'category' })
export class CategoryEntity extends AbstractEntity {
  @Column({ name: 'category_name', unique: true })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'category_image' })
  category_image: string;

  @ManyToOne(() => CategoryEntity, (category) => category.children)
  parent: CategoryEntity;

  @OneToMany(() => CategoryEntity, (category) => category.parent)
  children: CategoryEntity[];

  @OneToMany(() => ProductEntity, (product) => product.category)
  product: ProductEntity[];

  @OneToMany(() => VariationEntity, (variation) => variation.category)
  variation: VariationEntity[];
}
