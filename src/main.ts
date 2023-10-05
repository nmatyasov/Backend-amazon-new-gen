import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.use(cookieParser());

  const config = app.get<ConfigService>(ConfigService);
  const port = config.getOrThrow('PORT') || 3000;

  const globalPrefix = config.getOrThrow('GLOBAL_PREFFIX');
  app.setGlobalPrefix(globalPrefix);

  app.enableCors({
    credentials: true,
    origin: config.getOrThrow('FRONTEND_URL'),
  });

  const options = new DocumentBuilder()
    .setTitle('Api v1')
    .setDescription('The shop API for nestjs')
    .setVersion('1.0')
    .addBearerAuth({ in: 'header', type: 'http' })
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
