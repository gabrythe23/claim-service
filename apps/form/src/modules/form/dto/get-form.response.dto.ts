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

export class GetFormResponseDto {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({
    type: 'array',
    items: {
      oneOf: [
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
