import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { UsersEntity } from '@users/entites/users.entity';
import { AddressEntity } from 'src/addresses/entities/address.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'user_address' })
export class UserAddressEntity extends AbstractEntity {
  @Column({ name: 'is_default' })
  is_default: boolean;

  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;

  @ManyToOne(() => AddressEntity, (address) => address.id)
  address: AddressEntity;
}
