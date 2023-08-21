import { NestFactory } from '@nestjs/core';
import { env } from '@app/utils';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

export const makeApp = async (
  module: any,
  appBase: string,
  appPackageJson: { name: string; version: string; description: string },
): Promise<NestExpressApplication> => {
  const logger = new Logger(`Create App - ${appBase}`);
  const app = await NestFactory.create<NestExpressApplication>(module, {
    cors: true,
  });
  const serviceBasePath = `${env<string>(
    'SERVICE_API_PREFIX',
    '/api',
  )}/${appBase}`;
  // use validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  // set global prefix
  app.setGlobalPrefix(serviceBasePath);
  logger.verbose(`Global Prefix: ${serviceBasePath}`);
  // enable swagger-openapi
  const config = new DocumentBuilder()
    .setTitle(appPackageJson.name)
    .setDescription(appPackageJson.description)
    .setVersion(appPackageJson.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  if (!existsSync(`./sdk/${appBase}`)) mkdirSync(`./sdk/${appBase}`);
  writeFileSync(`./sdk/${appBase}/spec.json`, JSON.stringify(document));
  if (env<string>('ENV') !== 'production') {
    SwaggerModule.setup('documentation', app, document);
  }
  return app;
};
