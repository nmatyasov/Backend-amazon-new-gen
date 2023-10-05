import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'New user first name', nullable: false })
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ description: 'New user last name', nullable: false })
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ description: 'New user password', nullable: false })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'New user email', nullable: false })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'New user avatar', nullable: false })
  avatar: string;
}
