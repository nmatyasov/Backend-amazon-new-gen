import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CardUpdateDto {
  @ApiProperty({ description: 'Payment method' })
  @IsOptional()
  payment_user_method: string;

  @ApiProperty({ description: 'Payment provider' })
  @IsOptional()
  provider: string;

  @ApiProperty({ description: 'Payment type' })
  @IsOptional()
  payment_type: string;

  @ApiProperty({ description: 'Cardholder Name' })
  @IsOptional()
  cardholder_name: string;

  @ApiProperty({ description: 'Card Number' })
  @IsOptional()
  card_number: string;

  @ApiProperty({ description: 'Month exp' })
  @IsOptional()
  exp_month: number;

  @ApiProperty({ description: 'Month exp' })
  @IsOptional()
  exp_year: number;

  @ApiProperty({ description: 'Is default card' })
  @IsOptional()
  is_default: boolean;
}
