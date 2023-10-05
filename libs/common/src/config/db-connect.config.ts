import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  return {
    type: 'postgres',
    logging: process.env.TYPEORM_LOGGING,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV === 'dev',
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };
});
