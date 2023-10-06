import { AddressBaseDto } from '@addresses/dto/address.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AddressUpsertDto extends PartialType(AddressBaseDto) {
  @ApiProperty({ description: 'Default user address' })
  @IsOptional()
  is_default: boolean;
}
