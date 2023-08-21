import { ApiProperty } from '@nestjs/swagger';

export class GetClaimFileResponseDto {
  @ApiProperty({ type: String })
  key: string;

  @ApiProperty({ type: String })
  title: string;
}

export class GetResponseDto {
  @ApiProperty({ type: String })
  _id: string;

  @ApiProperty({ type: String })
  user_id: string;

  @ApiProperty({ type: String })
  claim_category: string;

  @ApiProperty({ type: String })
  claim_status: string;

  @ApiProperty({ type: String })
  claim_description: string;

  @ApiProperty({ type: GetClaimFileResponseDto })
  files: Array<GetClaimFileResponseDto>;

  @ApiProperty({ type: Date, required: false })
  date_started?: Date;

  @ApiProperty({ type: Date, required: false })
  date_closed?: Date;

  @ApiProperty({ type: Date })
  data_created: Date;

  @ApiProperty({ type: Date })
  date_updated: Date;
}
