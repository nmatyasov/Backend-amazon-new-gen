import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { UsersEntity } from '@users/entites/users.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { PaymentTypeEntity } from './payment_type.entity';
import { OrderEntity } from '@order/entities/order.entity';

@Entity({ name: 'payment_user_method' })
export class PaymentUserMethodEntity extends AbstractEntity {
  @Column({})
  provider: string;

  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;

  @ManyToOne(() => PaymentTypeEntity, (payment_type) => payment_type.id)
  payment_type: PaymentTypeEntity;

  @Column({})
  cardholder_name: string;

  @Column({})
  card_number: string;

  @Column({})
  exp_month: number;

  @Column({})
  exp_year: number;

  @Column({})
  is_default: boolean;

  @OneToMany(() => OrderEntity, (order) => order.payment_user_method)
  order: OrderEntity[];
}
