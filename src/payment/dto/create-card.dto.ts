import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CardCreateDto {
  @ApiProperty({ description: 'Payment method' })
  @IsNotEmpty()
  payment_user_methodid: string;

  @ApiProperty({ description: 'Payment provider' })
  @IsNotEmpty()
  provider: string;

  @ApiProperty({ description: 'Payment type' })
  @IsNotEmpty()
  payment_type: string;

  @ApiProperty({ description: 'Cardholder Name' })
  @IsNotEmpty()
  cardholder_name: string;

  @ApiProperty({ description: 'Card Number' })
  @IsNotEmpty()
  card_number: string;

  @ApiProperty({ description: 'Month exp' })
  @IsNotEmpty()
  exp_month: number;

  @ApiProperty({ description: 'Month exp' })
  @IsNotEmpty()
  exp_year: number;

  @ApiProperty({ description: 'Is default card' })
  @IsNotEmpty()
  is_default: boolean;
}
