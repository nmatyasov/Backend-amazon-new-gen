import { ConfigModule } from '@nestjs/config';
import dbConfiguration from './db-connect.config';

ConfigModule.forRoot({
  isGlobal: true,
  load: [dbConfiguration],
});

export default dbConfiguration();
