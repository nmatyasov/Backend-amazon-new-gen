import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class OrderUpdateDto {
  @ApiProperty({ description: 'Shipping address' })
  @IsOptional()
  addressid: string;

  @ApiProperty({ description: 'Payment method' })
  @IsOptional()
  payment_user_methodid: string;

  @ApiProperty({ description: 'Delivery method' })
  @IsOptional()
  delivery_methodid: string;

  @ApiProperty({ description: 'Status method' })
  @IsOptional()
  order_statusid: string;
}
