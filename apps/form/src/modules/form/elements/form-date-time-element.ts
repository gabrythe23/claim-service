import { FormElement, FormElements } from './form-element';
import { ApiProperty } from '@nestjs/swagger';
import { Prop } from '@nestjs/mongoose';

export class FormDateTimeElement extends FormElement {
  @ApiProperty({ type: String, default: FormElements.DATE_TIME })
  @Prop({ type: String, enum: FormElements, default: FormElements.DATE_TIME })
  type = FormElements.DATE_TIME;
}
