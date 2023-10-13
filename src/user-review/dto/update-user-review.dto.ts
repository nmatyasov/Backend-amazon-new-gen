import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, Max, MaxLength, Min, MinLength } from 'class-validator';

export class ReviewUpdateDto {
  @ApiProperty({ description: 'Rating min 0 max 5' })
  @IsOptional()
  @Min(0)
  @Max(5)
  rating_value: number;

  @ApiProperty({ description: 'Comment' })
  @IsOptional()
  @MinLength(10, {
    message:
      ' Comment is too short. Minimal length is $constraint1 characters, but actual is $value',
  })
  @MaxLength(4048, {
    message:
      'Comment is too long. Maximal length is $constraint1 characters, but actual is $value',
  })
  comment: string;
}
