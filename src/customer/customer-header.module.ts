import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { cust_header } from './model/customer_header.entity';
import { CustomerHeaderController } from './customer-header.controller';
import { CustomerHeaderService } from './customer-header.service';

@Module({
  imports: [TypeOrmModule.forFeature([cust_header])],
  providers: [CustomerHeaderService],
  controllers: [CustomerHeaderController],
})
export class CustomerHeaderModule {}
