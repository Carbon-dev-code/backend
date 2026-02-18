import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // autoriser toutes les origines (pour dev)
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*'
  });

  // écoute sur toutes les interfaces
  await app.listen(3000, '0.0.0.0');
}
bootstrap();