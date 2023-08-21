import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum CidBaremeResult {
  NB = 'NB',
  C = 'C',
  TLA = 'TLA',
  TLB = 'TLB',
}

export type CidBaremeDocument = CidBareme & Document;

@Schema({
  collection: 'cid_bareme',
})
export class CidBareme {
  @Prop({ type: Number })
  a: number;

  @Prop({ type: Number })
  b: number;

  @Prop({ type: String, enum: CidBaremeResult })
  result: CidBaremeResult;
}

export const CidBaremeSchema = SchemaFactory.createForClass(CidBareme);
