import { AbstractEntity } from '@app/lib/src/database/abstract.entity';
import { Column, Entity } from 'typeorm';

enum MimeType {
  JPG = 'image/jpg',
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  WEBP = 'image/webp',
}

@Entity({ name: 'review_images' })
export class ReviewImagesEntity extends AbstractEntity {
  @Column({ name: 'path' })
  path: string;

  @Column({ type: 'enum', enum: MimeType, default: MimeType.WEBP })
  mime: string;

  @Column({ name: 'sha256' })
  sha256: string;
}
