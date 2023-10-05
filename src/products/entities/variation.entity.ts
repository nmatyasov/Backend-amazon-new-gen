import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { CategoryEntity } from './category.entity';
import { VariationOptionEntity } from './variation_option.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'variation' })
export class VariationEntity extends AbstractEntity {
  @Column({ name: 'variation_name', unique: true })
  variation_name: string;

  @ManyToOne(() => CategoryEntity, (category) => category.id)
  category: CategoryEntity;

  @OneToMany(
    () => VariationOptionEntity,
    (variation_option) => variation_option.variation,
  )
  variation_option: VariationOptionEntity[];
}
