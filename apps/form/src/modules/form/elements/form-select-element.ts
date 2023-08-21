import { FormElement, FormElements } from './form-element';
import { ApiProperty } from '@nestjs/swagger';
import { Prop } from '@nestjs/mongoose';

export class FormSelectElement extends FormElement {
  @ApiProperty({ type: String, required: true, isArray: true })
  @Prop([{ type: String }])
  options: string[];

  @ApiProperty({ type: String, default: FormElements.SELECT })
  @Prop({ type: String, enum: FormElements, default: FormElements.SELECT })
  type = FormElements.SELECT;
}
