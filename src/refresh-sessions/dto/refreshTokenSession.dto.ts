import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class RefreshTokenSessionDto {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsString()
  @IsNotEmpty()
  fingerprint: string;

  @IsDate()
  @IsNotEmpty()
  expiresIn: number;

  @IsNotEmpty()
  userId: string;
}
