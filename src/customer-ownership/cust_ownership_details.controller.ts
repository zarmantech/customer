import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CustomerOwnershipDTO } from './cust_ownership_details.dto';
import { CustomerOwnershipService } from './cust_ownership_details.service';
import { CustomerOwnerSwaggerExample } from './cust_ownership_details.swagger';

@Controller('customer')
export class CustomerOwnershipController {
  constructor(private custService: CustomerOwnershipService) {}
  @ApiTags('Customer Ownership')
  @Get('owner/findall')
  @ApiOperation({ summary: 'Get All the customer ownership details' })
  @ApiResponse({
    description: 'Array of customer ownership details',
    status: 200,
    type: CustomerOwnershipDTO,
  })
  findAll() {
    return this.custService.getCustomer();
  }

  @ApiTags('Customer Ownership')
  @Get('/owner/:custCode')
  @ApiOperation({ summary: 'Get customer based on customer code' })
  @ApiResponse({
    description: 'Array of customer ownership details',
    status: 200,
    type: CustomerOwnershipDTO,
  })
  findOne(@Param('custCode') custCode: string) {
    return this.custService.findOne(custCode);
  }

  @ApiTags('Customer Ownership')
  @Post('owner/create')
  @ApiBody({
    schema: {
      example: CustomerOwnerSwaggerExample,
    },
  })
  @ApiOperation({
    summary: 'Create customer based on customer code from customer header',
  })
  @ApiResponse({
    description: 'Returns created customer ownership detail',
    status: 200,
    type: CustomerOwnershipDTO,
  })
  create(@Body() cust: CustomerOwnershipDTO) {
    return this.custService.createCustomerHeader(cust);
  }

  @ApiTags('Customer Ownership')
  @Put('owner/update')
  @ApiBody({
    schema: {
      example: CustomerOwnerSwaggerExample,
    },
  })
  @ApiOperation({ summary: 'Update customer based on customer code' })
  @ApiResponse({
    description: 'Returns updated customer ownership detail',
    status: 200,
    type: CustomerOwnershipDTO,
  })
  async editUserProfile(
    @Body() up: CustomerOwnershipDTO
  ): Promise<CustomerOwnershipDTO> {
    const upEdited = await this.custService.editCustomerHeader(up);
    return upEdited;
  }

  @ApiTags('Customer Ownership')
  @Delete('owner/:custCode')
  @ApiParam({ name: 'custCode', type: 'string', required: false })
  @ApiResponse({ description: 'code should be 200/201' })
  @ApiOperation({ summary: 'Delete customer based on customer code' })
  remove(@Param('custCode') custCode: string) {
    return this.custService.remove(custCode);
  }
}
