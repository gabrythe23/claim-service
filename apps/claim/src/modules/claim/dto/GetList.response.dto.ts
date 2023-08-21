import { ApiProperty } from '@nestjs/swagger';

export class GetListClaimItemResponseDto {
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

  @ApiProperty({ type: Date, required: false })
  date_started?: Date;

  @ApiProperty({ type: Date, required: false })
  date_closed?: Date;

  @ApiProperty({ type: Date })
  data_created: Date;

  @ApiProperty({ type: Date })
  date_updated: Date;
}

export class GetListResponseDto {
  @ApiProperty({ type: Number })
  count: number;

  @ApiProperty({ type: GetListClaimItemResponseDto, isArray: true })
  items: GetListClaimItemResponseDto[];
}
