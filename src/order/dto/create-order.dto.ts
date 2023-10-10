import { ApiProperty } from '@nestjs/swagger';
import { ProductItemEntity } from '@product/entities/product_item.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class OrderCreateDto {
  @ApiProperty({ description: 'Shipping address' })
  @IsNotEmpty()
  addressid: string;

  @ApiProperty({ description: 'Payment method' })
  @IsNotEmpty()
  payment_user_methodid: string;

  @ApiProperty({ description: 'Product items array' })
  @IsOptional()
  product_items?: ProductItemEntity[];
}
