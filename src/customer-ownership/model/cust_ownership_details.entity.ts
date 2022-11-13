import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ViewEntity,
} from 'typeorm';

@Entity()
@ViewEntity({ schema: 'customer', name: 'cust_ownership_details' })
export class cust_ownership_details extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ length: 150, nullable: false })
  custCode: string;

  @Column({ length: 100 })
  custVeteranOwnEnter: string;

  custLGBT: boolean;

  @Column({ length: 300 })
  custWebsite: string;

  @Column({ length: 100 })
  custDisabledOwnEnter: string;

  @Column({ length: 400 })
  custLegalEntityAddr: string;
}
