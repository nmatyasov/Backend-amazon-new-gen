import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CartCreateDto {
  @ApiProperty({ description: 'Cart name' })
  @IsNotEmpty()
  @Length(3, 20)
  cartname: string;
}
