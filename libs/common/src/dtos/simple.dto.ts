import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SimpleDto {
  @ApiProperty({ description: 'Some identifier', nullable: false })
  @IsNotEmpty()
  id: string;
}
