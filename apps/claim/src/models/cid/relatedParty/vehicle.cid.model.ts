import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema({
  _id: false,
  id: false,
  timestamps: false,
})
export class Vehicle {
  @ApiProperty({ type: String })
  @Prop({ type: String })
  brand: string;

  @ApiProperty({ type: String })
  @Prop({ type: String })
  type: string;

  @ApiProperty({ type: String })
  @Prop({ type: String, required: false })
  licensePlateNumber?: string;

  @ApiProperty({ type: String })
  @Prop({ type: String, required: false })
  vinNumber?: string;

  @ApiProperty({ type: String })
  @Prop({ type: String })
  matriculationState: string;

  @ApiProperty({ type: String })
  @Prop({ type: String, required: false })
  trailerLicensePlateNumber?: string;

  @ApiProperty({ type: String })
  @Prop({ type: String, required: false })
  trailerVinNumber?: string;

  @ApiProperty({ type: String })
  @Prop({ type: String, required: false })
  trailerMatriculationState?: string;
}
