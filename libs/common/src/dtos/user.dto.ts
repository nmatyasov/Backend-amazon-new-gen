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

  @ApiProperty({ description: 'User avatar' })
  avatar?: string;
}
