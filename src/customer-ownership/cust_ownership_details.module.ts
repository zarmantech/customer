import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cust_header } from 'src/customer/model/customer_header.entity';
import { CustomerOwnershipController } from './cust_ownership_details.controller';
import { CustomerOwnershipService } from './cust_ownership_details.service';
import { cust_ownership_details } from './model/cust_ownership_details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([cust_ownership_details, cust_header])],
  providers: [CustomerOwnershipService],
  controllers: [CustomerOwnershipController],
})
export class CustomerOwnershipModule {}
