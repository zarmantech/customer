import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { CustomerHeaderDTO } from './customer-header.dto';
import { CustomerHeaderService } from './customer-header.service';
import { CustomerHeaderSwaggerExample } from './customer-header.swagger';

@Controller('customer')
export class CustomerHeaderController {
  constructor(private custService: CustomerHeaderService) {}
  @ApiTags('Customer Header')
  @Get('/findall')
  findAll() {
    return this.custService.getCustomer();
  }

  @ApiTags('Customer Header')
  @Get('/byid/:id')
  findOne(@Param('id') id: number) {
    return this.custService.findOne(id);
  }

  @ApiTags('Customer Header')
  @Post('/create')
  @ApiBody({
    schema: {
      example: CustomerHeaderSwaggerExample,
    },
  })
  create(@Body() cust: CustomerHeaderDTO) {
    return this.custService.createCustomerHeader(cust);
  }

  @ApiTags('Customer Header')
  @Put('/update')
  @ApiBody({
    schema: {
      example: CustomerHeaderSwaggerExample,
    },
  })
  async editUserProfile(
    @Body() up: CustomerHeaderDTO
  ): Promise<CustomerHeaderDTO> {
    const upEdited = await this.custService.editCustomerHeader(up);
    return upEdited;
  }

  @ApiTags('Customer Header')
  @Delete('delete/:custCode/:custId')
  @ApiParam({ name: 'custCode', type: 'string', required: false })
  @ApiParam({ name: 'custId', type: 'number', required: false })
  remove(@Param('custCode') custCode: string, @Param('custId') custId: number) {
    // console.log(isNaN(custId));
    // console.log(isNaN(custId) ? custId : custCode);
    // console.log(custCode === '{custCode}');
    if (custCode === '{custCode}' && isNaN(custId))
      return { message: 'Parameters are not supplied', status: 500 };
    const cust = new CustomerHeaderDTO();
    if (!isNaN(custId)) cust.custID = custId;
    if (!(custCode === '{custCode}')) cust.custCode = custCode;
    return this.custService.remove(cust);
  }
}
