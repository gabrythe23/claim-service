import { FormElement, FormElements } from './form-element';
import { ApiProperty } from '@nestjs/swagger';
import { Prop } from '@nestjs/mongoose';

export class FormTextElement extends FormElement {
  @ApiProperty({ type: RegExp, required: false })
  @Prop({ type: RegExp })
  regex?: RegExp;

  @ApiProperty({ type: String, default: FormElements.TEXT })
  @Prop({ type: String, enum: FormElements, default: FormElements.TEXT })
  type = FormElements.TEXT;
}
