import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { JwtPayload } from '@app/lib';
import { RefreshSessionsService } from '@refresh-sessions/refresh-sessions.service';
import { UsersEntity } from '@users/entites/users.entity';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(
    private readonly configService: ConfigService,
    private readonly refreshSessionsService: RefreshSessionsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies['RefreshToken'];
          if (!data) {
            return null;
          }
          return data;
        },
      ]),
      secretOrKey: configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(request: Request, payload: any): Promise<UsersEntity> {
    const refreshToken = request.cookies['RefreshToken'];
    const jwtPayload: JwtPayload = payload.payload;
    const user = await this.refreshSessionsService.getUserIfRefreshTokenMatches(
      refreshToken,
      jwtPayload.id,
    );

    return user;
  }
}
