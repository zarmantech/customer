import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cust_header } from 'src/customer/model/customer_header.entity';
import { Repository } from 'typeorm';
import { CustomerOwnershipDTO } from './cust_ownership_details.dto';
import { cust_ownership_details } from './model/cust_ownership_details.entity';

@Injectable()
export class CustomerOwnershipService {
  constructor(
    @InjectRepository(cust_ownership_details)
    private custOwnerRepository: Repository<cust_ownership_details>,
    @InjectRepository(cust_header)
    private custRepository: Repository<cust_header>
  ) {}
  async getCustomer(): Promise<cust_ownership_details[]> {
    return await this.custOwnerRepository.find();
  }

  findOne(custCode: string): Promise<cust_ownership_details> {
    const records = this.custOwnerRepository.findOne({ custCode: custCode });
    return records || undefined;
  }

  async createCustomerHeader(cust: CustomerOwnershipDTO) {
    const isExistingCustomer = await this.custRepository.find({
      custCode: cust.custCode,
    });

    if (isExistingCustomer.length <= 0) {
      throw new NotFoundException('Invalid Customer code');
    }

    const isExistingCustomerOwner = await this.custOwnerRepository.find({
      custCode: cust.custCode,
    });
    if (isExistingCustomerOwner.length > 0) {
      throw new HttpException('Customer ownership exist', HttpStatus.AMBIGUOUS);
    }
    return this.custOwnerRepository.save(cust);
  }

  async remove(custCode: string) {
    const isDeleted = await this.custOwnerRepository.delete({
      custCode: custCode,
    });
    if (isDeleted.affected === 0) {
      throw new NotFoundException("Customer code doesn't exist");
    }
    return isDeleted;
  }

  async editCustomerHeader(
    cust: CustomerOwnershipDTO
  ): Promise<cust_ownership_details> {
    const existingCustomer = await this.custOwnerRepository.findOne({
      custCode: cust.custCode,
    });

    if (!existingCustomer) {
      throw new NotFoundException('Invalid Customer Code');
    }
    existingCustomer.custDisabledOwnEnter =
      cust.custDisabledOwnEnter || existingCustomer.custDisabledOwnEnter;
    existingCustomer.custLGBT = cust.custLGBT || existingCustomer.custLGBT;
    existingCustomer.custLegalEntityAddr =
      cust.custLegalEntityAddr || existingCustomer.custLegalEntityAddr;
    existingCustomer.custVeteranOwnEnter =
      cust.custVeteranOwnEnter || existingCustomer.custVeteranOwnEnter;

    await existingCustomer.save();
    return existingCustomer;
  }
}
