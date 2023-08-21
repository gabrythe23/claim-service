import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Whiteness } from './whiteness.cid.model';
import { Location } from './location.cid.model';
import { RelatedParty } from './relatedParty';
import { ObjectId } from 'mongodb';

export type CidDocument = Cid & Document;

@Schema({
  collection: 'cid',
  timestamps: true,
})
export class Cid {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: ObjectId;

  @ApiProperty({ type: Date })
  @Prop({ type: Date })
  happenAt: Date;

  @ApiProperty({ type: Location })
  @Prop(Location)
  location: Location;

  @ApiProperty({ type: Boolean })
  @Prop({ type: Boolean })
  injuries: boolean;

  @ApiProperty({ type: Boolean })
  @Prop({ type: Boolean })
  otherVehicleDamaged: boolean;

  @ApiProperty({ type: Boolean })
  @Prop({ type: Boolean })
  otherPropertiesDamages: boolean;

  @ApiProperty({ type: Whiteness })
  @Prop(Whiteness)
  witnesses: Whiteness[];

  @ApiProperty({ type: RelatedParty, isArray: true })
  @Prop([RelatedParty])
  relatedParties: RelatedParty[];

  createdAt: Date;

  updatedAt: Date;
}

export const CidSchema = SchemaFactory.createForClass(Cid);
