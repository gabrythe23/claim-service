import { FormElement, FormElements } from './form-element';
import { ApiProperty } from '@nestjs/swagger';
import { Prop } from '@nestjs/mongoose';

export class FormBooleanElement extends FormElement {
  @ApiProperty({ type: String, default: FormElements.BOOLEAN })
  @Prop({ type: String, enum: FormElements, default: FormElements.BOOLEAN })
  type = FormElements.BOOLEAN;
}
