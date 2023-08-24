import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

// eslint-disable-next-line func-style
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true }),
    config = new DocumentBuilder()
      .setTitle('Legaltech')
      .setDescription('Legaltech backend')
      .setVersion('1.0')
      .addTag('legaltech')
      .build(),
    document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = 5001;
  await app.listen(port);
}
bootstrap();
