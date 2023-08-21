import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  _id: false,
  id: false,
  timestamps: false,
})
export class Location {
  @ApiProperty({ type: String })
  @Prop({ type: String })
  city: string;

  @ApiProperty({ type: String })
  @Prop({ type: String })
  state: string;

  @ApiProperty({ type: String })
  @Prop({ type: String })
  address: string;

  @ApiProperty({ type: String })
  @Prop({ type: String })
  cap: string;

  @ApiProperty({ type: String })
  @Prop({ type: String })
  country: string;
}
