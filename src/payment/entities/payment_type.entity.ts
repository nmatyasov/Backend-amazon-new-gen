import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { PaymentUserMethodEntity } from 'src/payment/entities/payment_user_method.entity';

import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'payment_type' })
export class PaymentTypeEntity extends AbstractEntity {
  @Column({ name: 'payment_name', unique: true })
  payment_name: string;

  @OneToMany(
    () => PaymentUserMethodEntity,
    (payment_user_method) => payment_user_method.payment_type,
  )
  payment_user_method: PaymentUserMethodEntity[];
}
