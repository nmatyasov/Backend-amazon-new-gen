import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { ReviewImagesEntity } from '@review/entities/review-images.entity';
import { UserReviewEntity } from '@review/entities/user-review.entity';

import { Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'review_product_item_image' })
export class ProductItemImageEntity extends AbstractEntity {
  @ManyToOne(() => UserReviewEntity, (user_review) => user_review.id)
  user_review: UserReviewEntity;

  @ManyToOne(() => ReviewImagesEntity, (image) => image.id)
  image: ReviewImagesEntity;
}
