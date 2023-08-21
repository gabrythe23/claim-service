import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { Prop } from '@nestjs/mongoose';

export enum FormElements {
  BOOLEAN = 'BOOLEAN',
  SELECT = 'SELECT',
  TEXT = 'TEXT',
  DATE_TIME = 'DATE_TIME',
  DATE = 'DATE',
  TIME = 'TIME',
  NUMBER = 'NUMBER',
}

export class FormElement {
  @ApiProperty({ type: String, required: true })
  @IsString()
  @Prop({ type: String })
  propertyName: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @Prop({ type: String })
  request: string;

  @ApiProperty({ enum: FormElements })
  @IsEnum(FormElements)
  @Prop({ type: String, enum: FormElements })
  type: FormElements;
}
