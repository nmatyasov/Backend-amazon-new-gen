import { ApiProperty } from '@nestjs/swagger';

export class AddressBaseDto {
  @ApiProperty({ description: 'Unit number' })
  unit_number: string;

  @ApiProperty({ description: 'Street number' })
  street_number: string;

  @ApiProperty({ description: 'Address line 1' })
  address_line1: string;

  @ApiProperty({ description: 'Address line 2' })
  address_line2: string;

  @ApiProperty({ description: 'City' })
  city: string;

  @ApiProperty({ description: 'Region' })
  region: string;

  @ApiProperty({ description: 'Postal code' })
  postal_code: string;

  @ApiProperty({ description: 'Country' })
  country: string;
}
