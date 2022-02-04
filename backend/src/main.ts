import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT');
  const NODE_ENV = configService.get('NODE_ENV');

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: NODE_ENV !== 'development',
    }),
  );

  app.enableCors();

  await app.listen(PORT);
  console.log(`server started on port ${PORT}`);
}
bootstrap();
