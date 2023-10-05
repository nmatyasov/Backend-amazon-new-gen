import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class credentialsUserDto {
  @ApiProperty({ description: 'User email', nullable: false })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ description: 'User password', nullable: false })
  @IsNotEmpty()
  readonly password: string;
}
