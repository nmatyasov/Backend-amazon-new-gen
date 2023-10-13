import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { TokensEntity } from '@refresh-sessions/entities/tokens.entity';
import { Expose } from 'class-transformer';
import { UserAddressEntity } from '@addresses/entities/user_address.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ShoppingCartEntity } from '@cart/entities/shopping_cart.entity';
import { UserReviewEntity } from '@review/entities/user-review.entity';

@Entity({ name: 'users' })
export class UsersEntity extends AbstractEntity {
  @Column({ name: 'first_name' })
  public firstName: string;
  @Column({ name: 'last_name' })
  public lastName: string;
  @Column({ name: 'email', unique: true })
  public email: string;
  @Column({ name: 'password' })
  public password: string;
  @Column({ name: 'avatar', nullable: true })
  public avatar: string;
  @Column({ name: 'phone_number', unique: true })
  public phone_number: string;

  @OneToMany(() => UserAddressEntity, (useraddress) => useraddress.user)
  useraddress: UserAddressEntity[];

  @OneToMany(() => TokensEntity, (tokens) => tokens.user)
  tokens: TokensEntity[];

  @OneToMany(() => ShoppingCartEntity, (shopping_cart) => shopping_cart.user)
  shopping_cart: ShoppingCartEntity[];

  @OneToMany(() => UserReviewEntity, (user_review) => user_review.user)
  user_review: UserReviewEntity[];

  @Expose()
  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
