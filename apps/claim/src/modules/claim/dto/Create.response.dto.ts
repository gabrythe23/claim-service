import { ApiProperty } from '@nestjs/swagger';

export class CreateResponseDto {
  @ApiProperty({ type: String })
  _id: string;
}
