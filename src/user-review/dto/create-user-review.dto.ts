import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Max, MaxLength, Min, MinLength } from 'class-validator';

export class ReviewCreateDto {
  @ApiProperty({ description: 'Product item' })
  @IsNotEmpty()
  ordered_product: string;

  @ApiProperty({ description: 'Rating min 0 max 5' })
  @IsNotEmpty()
  @Min(0)
  @Max(5)
  rating_value: number;

  @ApiProperty({ description: 'Comment' })
  @IsNotEmpty()
  @MinLength(10, {
    // here, $constraint1 will be replaced with "10", and $value with actual supplied value
    message:
      ' Comment is too short. Minimal length is $constraint1 characters, but actual is $value',
  })
  @MaxLength(4048, {
    message:
      'Comment is too long. Maximal length is $constraint1 characters, but actual is $value',
  })
  comment: string;
}
