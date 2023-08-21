import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class GetListRequestDto {
  @ApiProperty({ type: Number, required: false, default: 20 })
  @Type(() => Number)
  @IsNumber()
  @IsInt()
  limit = 20;

  @ApiProperty({ type: Number, required: false, default: 0 })
  @Type(() => Number)
  @IsNumber()
  @IsInt()
  skip = 0;
}
