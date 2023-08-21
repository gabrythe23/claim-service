import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import {
  FormBooleanElement,
  FormDateElement,
  FormDateTimeElement,
  FormNumberElement,
  FormSelectElement,
  FormTextElement,
  FormTimeElement,
} from '../elements';
import { Prop } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';

export class CreateFormRequestDto {
  @ApiProperty({ type: String })
  @Prop({ type: String })
  name: string;

  @ApiProperty({
    type: 'array',
    items: {
      anyOf: [
        { $ref: getSchemaPath(FormBooleanElement) },
        { $ref: getSchemaPath(FormDateElement) },
        { $ref: getSchemaPath(FormDateTimeElement) },
        { $ref: getSchemaPath(FormNumberElement) },
        { $ref: getSchemaPath(FormSelectElement) },
        { $ref: getSchemaPath(FormTextElement) },
        { $ref: getSchemaPath(FormTimeElement) },
      ],
    },
  })
  @Prop({ type: SchemaTypes.Mixed })
  elements: Array<
    | FormBooleanElement
    | FormDateElement
    | FormDateTimeElement
    | FormNumberElement
    | FormSelectElement
    | FormTextElement
    | FormTimeElement
  >;
}
