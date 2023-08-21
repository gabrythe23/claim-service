import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Location } from '../location.cid.model';

@Schema({
  _id: false,
  id: false,
  timestamps: false,
})
export class InsuranceCompany {
  @ApiProperty({ type: String })
  @Prop({ type: String })
  denomination: string;

  @ApiProperty({ type: String })
  @Prop({ type: String, isRequired: false })
  insuranceNumber?: string;

  @ApiProperty({ type: String })
  @Prop({ type: String, isRequired: false })
  greenCardNumber?: string;

  @ApiProperty({ type: Date })
  @Prop({ type: Date })
  validFrom: Date;

  @ApiProperty({ type: Date })
  @Prop({ type: Date })
  validTo: Date;

  @ApiProperty({ type: Boolean })
  @Prop({ type: Boolean })
  damageCoverage: boolean;

  @ApiProperty({ type: String })
  @Prop({ type: String })
  agencyName?: string;

  @ApiProperty({ type: Location })
  @Prop({ type: Location })
  agencyLocation?: Location;
}
