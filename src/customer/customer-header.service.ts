import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { cust_header } from './model/customer_header.entity';
import { CustomerHeaderDTO } from './customer-header.dto';

@Injectable()
export class CustomerHeaderService {
  constructor(
    @InjectRepository(cust_header)
    private custHeaderRepository: Repository<cust_header>
  ) {}
  async getCustomer(): Promise<cust_header[]> {
    return await this.custHeaderRepository.find(); //('select * from vokk.user-profile');
  }

  findOne(id: number): Promise<cust_header> {
    return this.custHeaderRepository.findOne(id);
  }

  async createCustomerHeader(cust: CustomerHeaderDTO) {
    const isExistingCustomer = cust.custID
      ? await this.custHeaderRepository.find({
          custID: cust.custID,
        })
      : cust.custCode
      ? await this.custHeaderRepository.find({
          custCode: cust.custCode,
        })
      : [];
    if (isExistingCustomer.length > 0) {
      return { message: 'Customer Exists', status: 409 };
    }
    return this.custHeaderRepository.save(cust);
  }

  async remove(cust: CustomerHeaderDTO) {
    const isDeleted = cust.custID
      ? await this.custHeaderRepository.delete({
          custID: cust.custID,
        })
      : cust.custCode
      ? await this.custHeaderRepository.delete({
          custCode: cust.custCode,
        })
      : [];
    return isDeleted;
  }

  async editCustomerHeader(cust: CustomerHeaderDTO): Promise<cust_header> {
    const existingCustomer = cust.custID
      ? await this.custHeaderRepository.findOne({
          custID: cust.custID,
        })
      : cust.custCode
      ? await this.custHeaderRepository.findOne({
          custCode: cust.custCode,
        })
      : undefined;
    if (!existingCustomer) {
      throw 'Invalid Customer ID/ Customer Code';
    }
    existingCustomer.custName = cust.custName || existingCustomer.custName;
    existingCustomer.custAddress1 =
      cust.custAddress1 || existingCustomer.custAddress1;
    existingCustomer.custAddress2 =
      cust.custAddress2 || existingCustomer.custAddress2;
    existingCustomer.custCity = cust.custCity || existingCustomer.custCity;
    existingCustomer.custCountry =
      cust.custCountry || existingCustomer.custCountry;
    existingCustomer.custMobile =
      cust.custMobile || existingCustomer.custMobile;
    existingCustomer.custPhone1 =
      cust.custPhone1 || existingCustomer.custPhone1;
    existingCustomer.custPhone2 =
      cust.custPhone2 || existingCustomer.custPhone2;
    existingCustomer.custPhone3 =
      cust.custPhone3 || existingCustomer.custPhone3;
    existingCustomer.custState = cust.custState || existingCustomer.custState;
    existingCustomer.custZip = cust.custZip || existingCustomer.custZip;
    await existingCustomer.save();
    return existingCustomer;
  }
}
