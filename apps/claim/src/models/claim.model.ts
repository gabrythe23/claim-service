import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ClaimDocument = Claim & Document;

@Schema({
  _id: false,
  id: false,
  timestamps: false,
})
export class ClaimFile {
  @Prop(String)
  key: string;

  @Prop(String)
  title: string;
}

@Schema({
  collection: 'claim',
  timestamps: { createdAt: 'data_created', updatedAt: 'date_updated' },
})
export class Claim {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId })
  user_id: Types.ObjectId;

  @Prop({ type: String })
  claim_category: string;

  @Prop({ type: String })
  claim_status: string;

  @Prop({ type: String })
  claim_description: string;

  @Prop([{ type: ClaimFile }])
  files: Array<ClaimFile>;

  @ApiProperty({ type: Date })
  @Prop({ type: String })
  date_started: Date;

  @ApiProperty({ type: Date })
  @Prop({ type: Date })
  date_closed: Date;

  @ApiProperty({ type: Date })
  data_created?: Date;

  @ApiProperty({ type: Date })
  date_updated?: Date;
}

export const ClaimSchema = SchemaFactory.createForClass(Claim);
