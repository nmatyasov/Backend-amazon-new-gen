import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { AddressEntity } from './address.entity';

@Entity({ name: 'country' })
export class CountryEntity extends AbstractEntity {
  @Column({ name: 'country_name', unique: true })
  country_name: string;

  @Column({ name: 'country_code', unique: true })
  country_code: string;

  @OneToMany(() => AddressEntity, (address) => address.country)
  address: AddressEntity[];
}
