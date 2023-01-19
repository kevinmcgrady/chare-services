import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { initFirebase } from './lib/firebase';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initFirebase();
  app.use(cookieParser());
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
