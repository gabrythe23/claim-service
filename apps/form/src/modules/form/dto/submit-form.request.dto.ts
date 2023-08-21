import { ApiProperty } from '@nestjs/swagger';

export class SubmitFormRequestDto {
  @ApiProperty({
    type: Object,
  })
  data: object;
}
