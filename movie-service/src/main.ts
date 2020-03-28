import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3001;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port,
      },
      logger: new Logger(),
    },
  );
  await app.listen(() =>
    Logger.log(`movie-service listening on port: ${port}`),
  );
}
bootstrap();
