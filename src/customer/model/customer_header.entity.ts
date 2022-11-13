import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ViewEntity,
} from 'typeorm';

@Entity()
@ViewEntity({ schema: 'customer', name: 'cust_header' })
export class cust_header extends BaseEntity {
  @PrimaryGeneratedColumn()
  custID: number;

  @Column({ length: 150, nullable: false })
  custCode: string;

  @Column({ length: 200, nullable: false })
  custName: string;

  @Column({ length: 15, nullable: false })
  custPhone1: string;

  @Column({ length: 15 })
  custPhone2: string;

  @Column({ length: 15 })
  custPhone3: string;

  @Column({ length: 15, nullable: false })
  custMobile: string;

  @Column({ length: 300 })
  custAddress1: string;

  @Column({ length: 300 })
  custAddress2: string;

  @Column({ length: 10 })
  custZip: string;

  @Column({ length: 20 })
  custCity: string;

  @Column({ length: 150 })
  custState: string;

  @Column({ length: 200 })
  custCountry: string;
}
