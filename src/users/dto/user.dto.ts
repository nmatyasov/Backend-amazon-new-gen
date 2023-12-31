import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'User identifier', nullable: false })
  @IsNotEmpty()
  _id: string;

  @ApiProperty({ description: 'User name', nullable: false })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'User email', nullable: false })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User email confirmed status', nullable: true })
  isEmailConfirmed: boolean;

  @ApiProperty({ description: 'Array user roles', nullable: false })
  roles: string[];

  @ApiProperty({ description: 'User avatar', nullable: true })
  avatar: string;
}
