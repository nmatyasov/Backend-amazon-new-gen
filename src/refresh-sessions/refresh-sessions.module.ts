import { Module } from '@nestjs/common';

import { RefreshSessionsService } from './refresh-sessions.service';
import { UsersModule } from '@users/users.module';
import { RefreshSessionsController } from './refresh-sessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokensRepository } from '@refresh-sessions/tokens.repository';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([TokensRepository])],

  providers: [RefreshSessionsService],
  exports: [RefreshSessionsService],
  controllers: [RefreshSessionsController],
})
export class RefreshSessionsModule {}
