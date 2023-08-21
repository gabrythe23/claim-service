import { FormElement, FormElements } from './form-element';
import { ApiProperty } from '@nestjs/swagger';
import { Prop } from '@nestjs/mongoose';

export class FormDateElement extends FormElement {
  @ApiProperty({ type: String, default: FormElements.DATE })
  @Prop({ type: String, enum: FormElements, default: FormElements.DATE })
  type = FormElements.DATE;
}
