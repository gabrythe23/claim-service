import { ApiProperty } from '@nestjs/swagger';
import { CidBaremeResult } from '../../../models';

export class BaremeResponseDto {
  @ApiProperty({ enum: CidBaremeResult })
  result: CidBaremeResult;
}
