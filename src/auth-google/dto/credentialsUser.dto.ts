import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class credentialsGoogleUserDto {
  @ApiProperty({ description: 'User email', nullable: false })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ description: 'User name', nullable: false })
  @IsNotEmpty()
  readonly firstname: string;

  @ApiProperty({ description: 'User name', nullable: false })
  @IsNotEmpty()
  readonly lastname: string;

  @ApiProperty({ description: 'User avatar', nullable: false })
  readonly avatar: string;
}
