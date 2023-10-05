import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { ProductEntity } from './product.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'brand' })
export class BrandEntity extends AbstractEntity {
  @Column({ name: 'brand_name', unique: true })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'brand_logo' })
  brand_logo: string;

  @ManyToOne(() => BrandEntity, (brand) => brand.children)
  parent: BrandEntity;

  @OneToMany(() => BrandEntity, (brand) => brand.parent)
  children: BrandEntity[];

  @OneToMany(() => ProductEntity, (product) => product.brand)
  product: ProductEntity[];
}
