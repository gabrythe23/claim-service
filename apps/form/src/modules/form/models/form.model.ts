import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { CreateFormRequestDto } from '../dto';

export type FormModelDocument = FormModel & Document;

@Schema({
  collection: 'form-model',
  timestamps: true,
})
export class FormModel extends CreateFormRequestDto {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId })
  userCreator: Types.ObjectId;

  @ApiProperty({ type: Date })
  createdAt?: Date;

  @ApiProperty({ type: Date })
  updatedAt?: Date;
}

export const FormModelSchema = SchemaFactory.createForClass(FormModel);
