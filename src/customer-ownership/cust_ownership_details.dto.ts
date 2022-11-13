import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsUrl, MaxLength } from 'class-validator';

export class CustomerOwnershipDTO {
  @ApiProperty({
    type: Number,
    description: 'Auto generated ID',
  })
  ID: number;
  @MaxLength(150)
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Existing customer code from customer header',
  })
  custCode: string;

  @MaxLength(100)
  @ApiProperty({
    type: String,
    description: 'Veteran Owner',
  })
  custVeteranOwnEnter: string;

  @IsBoolean()
  @ApiProperty({ description: 'Should be a true/false', type: Boolean })
  custLGBT: boolean;

  @MaxLength(300)
  @ApiProperty({ description: 'Should be a valid URL', type: String })
  @IsUrl(undefined, { message: 'Company Url is not valid.' })
  custWebsite: string;

  @MaxLength(100)
  @ApiProperty({ description: 'Disabled owner name', type: String })
  custDisabledOwnEnter: string;

  @MaxLength(400)
  @ApiProperty({ description: 'Legal entity address', type: String })
  custLegalEntityAddr: string;
}
