import { ApiProperty } from '@nestjs/swagger';
import { ProductItemEntity } from '@product/entities/product_item.entity';
import { IsNotEmpty } from 'class-validator';

export class AddProductLineDto {
  @ApiProperty({ description: 'Product item' })
  @IsNotEmpty()
  product_item: ProductItemEntity;
}
