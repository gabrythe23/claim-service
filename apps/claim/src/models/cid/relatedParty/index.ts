import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema } from '@nestjs/mongoose';
import { Insured } from './insured.cid.model';
import { Vehicle } from './vehicle.cid.model';
import { InsuranceCompany } from './insurance-company.cid.model';
import { Driver } from './driver.cid.model';

@Schema({
  _id: false,
  id: false,
  timestamps: false,
})
export class RelatedParty {
  @ApiProperty({ type: Number })
  @Prop({ type: Number })
  circumstances: number;

  @ApiProperty({ type: Insured })
  @Prop(Insured)
  insured: Insured;

  @ApiProperty({ type: Vehicle })
  @Prop(Vehicle)
  vehicle: Vehicle;

  @ApiProperty({ type: InsuranceCompany })
  @Prop(InsuranceCompany)
  insuranceCompany: InsuranceCompany;

  @ApiProperty({ type: Driver })
  @Prop(Driver)
  driver: Driver;

  @Prop({ type: String })
  initialImpact: string;

  @ApiProperty({ type: String })
  @Prop({ type: String })
  visibleDamages: string;

  @ApiProperty({ type: String })
  @Prop({ type: String })
  observations: string;
}
