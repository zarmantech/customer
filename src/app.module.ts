import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerOwnershipModule } from './customer-ownership/cust_ownership_details.module';
import { CustomerHeaderModule } from './customer/customer-header.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CustomerHeaderModule,
    CustomerOwnershipModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
