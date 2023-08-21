import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Location } from '../location.cid.model';

@Schema({
  _id: false,
  id: false,
  timestamps: false,
})
export class Insured {
  @ApiProperty({ type: String })
  @Prop({ type: String })
  name: string;

  @ApiProperty({ type: String })
  @Prop({ type: String })
  surname: string;

  @ApiProperty({ type: Location })
  @Prop(Location)
  address: Location;

  @ApiProperty({ type: String })
  @Prop({ type: String })
  telephone: string;

  @ApiProperty({ type: String })
  @Prop({ type: String, isRequired: false })
  emailAddress?: string;
}
