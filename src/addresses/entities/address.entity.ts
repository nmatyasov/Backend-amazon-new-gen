import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CountryEntity } from './country.entity';
import { UserAddressEntity } from '@addresses/entities/user_address.entity';

@Entity({ name: 'address' })
export class AddressEntity extends AbstractEntity {
  @Column({ name: 'unit_number' })
  public unit_number: string;
  @Column({ name: 'street_number' })
  public street_number: string;
  @Column({ name: 'address_line1' })
  public address_line1: string;
  @Column({ name: 'address_line2' })
  public address_line2: string;
  @Column({ name: 'city' })
  public city: string;
  @Column({ name: 'region' })
  public region: string;
  @Column({ name: 'postal_code' })
  public postal_code: string;

  @ManyToOne(() => CountryEntity, (country) => country.id)
  country: CountryEntity;

  @OneToMany(() => UserAddressEntity, (useraddress) => useraddress.address)
  useraddress: UserAddressEntity[];
}
