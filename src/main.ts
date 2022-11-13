import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CustomerOwnershipModule } from './customer-ownership/cust_ownership_details.module';
import { CustomerHeaderModule } from './customer/customer-header.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Customer endpoint')
    .setDescription('Customer API Documentation')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'jwt'
    )
    .build();
  const document_user = SwaggerModule.createDocument(app, swaggerOptions, {
    include: [CustomerHeaderModule, CustomerOwnershipModule],
  });
  SwaggerModule.setup('/swagger/customer', app, document_user);
  await app.listen(process.env.PORT || 3000);
  console.log(
    '\x1b[36m',
    `Application is running on url http://localhost:3000`
  );
}
bootstrap();
