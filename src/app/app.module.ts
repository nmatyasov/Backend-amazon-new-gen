import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@auth/auth.module';
import { AddressesModule } from '@addresses/addresses.module';
import { RefreshSessionsModule } from '@refresh-sessions/refresh-sessions.module';
import dbConfiguration from '@app/lib/src/config/db-connect.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
      load: [dbConfiguration],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
    }),
    AuthModule,
    AddressesModule,
    RefreshSessionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
