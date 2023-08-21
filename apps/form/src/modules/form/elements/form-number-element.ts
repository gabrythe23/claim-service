import { FormElement, FormElements } from './form-element';
import { ApiProperty } from '@nestjs/swagger';
import { Prop } from '@nestjs/mongoose';

export class FormNumberElement extends FormElement {
  @ApiProperty({ type: String, default: FormElements.NUMBER })
  @Prop({ type: String, enum: FormElements, default: FormElements.NUMBER })
  type = FormElements.NUMBER;
}
