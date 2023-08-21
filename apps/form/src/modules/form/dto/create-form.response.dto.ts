import { ApiProperty } from '@nestjs/swagger';

export class CreateFormResponseDto {
  @ApiProperty({ type: String })
  _id: string;
}
