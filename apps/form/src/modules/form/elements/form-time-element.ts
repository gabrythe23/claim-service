import { FormElement, FormElements } from './form-element';
import { ApiProperty } from '@nestjs/swagger';
import { Prop } from '@nestjs/mongoose';

export class FormTimeElement extends FormElement {
  @ApiProperty({ type: String, default: FormElements.TIME })
  @Prop({ type: String, enum: FormElements, default: FormElements.TIME })
  type = FormElements.TIME;
}
