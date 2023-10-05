import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { VariationEntity } from './variation.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'variation_option' })
export class VariationOptionEntity extends AbstractEntity {
  @Column({ name: 'name' })
  value: string;

  @ManyToOne(() => VariationEntity, (variation) => variation.id)
  variation: VariationEntity;
}
