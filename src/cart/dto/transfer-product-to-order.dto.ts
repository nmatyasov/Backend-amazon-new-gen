import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, Max, Min } from 'class-validator';

export class ProductItemDto {
  @ApiProperty({ description: 'Product item' })
  @IsNotEmpty()
  product_item: string;

  @ApiProperty({ description: 'Quantity' })
  @IsPositive()
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(1)
  @Max(999999)
  qty: number;
}
