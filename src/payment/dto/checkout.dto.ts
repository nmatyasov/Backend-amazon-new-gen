import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CheckOutDto {
  @ApiProperty({ description: 'Payment method' })
  @IsNotEmpty()
  payment_user_methodid: string;

  @ApiProperty({ description: 'Order identifier' })
  @IsNotEmpty()
  orderid: string;
}
