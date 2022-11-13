import { IsNotEmpty, IsNumberString, Length, MaxLength } from 'class-validator';

export class CustomerHeaderDTO {
  custID: number;
  @MaxLength(150)
  @IsNotEmpty()
  custCode: string;

  @MaxLength(200)
  @IsNotEmpty()
  custName: string;

  @Length(10, 10)
  @IsNotEmpty()
  @IsNumberString()
  custPhone1: string;

  @MaxLength(15)
  @IsNumberString()
  custPhone2: string;

  @MaxLength(15)
  @IsNumberString()
  custPhone3: string;

  @MaxLength(15)
  @IsNotEmpty()
  @Length(10, 10)
  custMobile: string;

  @MaxLength(300)
  custAddress1: string;

  @MaxLength(300)
  custAddress2: string;

  @MaxLength(10)
  custZip: string;

  @MaxLength(20)
  custCity: string;

  @MaxLength(150)
  custState: string;

  @MaxLength(200)
  custCountry: string;
}
