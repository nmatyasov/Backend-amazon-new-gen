import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ReviewImageDto {
  @ApiProperty({ description: 'Review identificator' })
  @IsNotEmpty()
  user_review: string;

  @ApiProperty({ description: 'Image identificator' })
  @IsNotEmpty()
  review_image: string;
}
