import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class UpdateRequestDto {
  @ApiProperty({ type: String })
  @IsString()
  claim_description: string;

  @ApiProperty({ type: Date })
  @IsDate()
  date_started: Date;
}
