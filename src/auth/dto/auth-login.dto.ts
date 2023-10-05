import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthUserDto {
  @ApiProperty({ description: 'User identifier', nullable: false })
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty({ description: 'User name', nullable: false })
  @IsNotEmpty()
  readonly fullname: string;

  @ApiProperty({ description: 'Access token', nullable: false })
  @IsNotEmpty()
  readonly accessToken: string;

  @ApiProperty({ description: 'Refresh token', nullable: false })
  @IsNotEmpty()
  readonly refreshToken: string;
  /*
  @ApiProperty({ description: 'Array user roles', nullable: false })
  roles: string[];
*/
  @ApiProperty({ description: 'User avatar', nullable: false })
  readonly avatar: string;

  @ApiProperty({ description: 'User email', nullable: false })
  readonly email: string;
}
