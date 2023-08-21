import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class CreateRequestDto {
  @ApiProperty({ type: String, required: false })
  @IsString()
  behalfOf?: string;

  @ApiProperty({ type: String })
  @IsString()
  claim_category: string;

  @ApiProperty({ type: String })
  @IsString()
  claim_status: string;

  @ApiProperty({ type: String })
  @IsString()
  claim_description: string;

  @ApiProperty({ type: Date })
  @IsDate()
  date_started: Date;
}
