import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { ClaimQueryService } from '../services';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetListRequestDto, GetListResponseDto, GetResponseDto } from '../dto';
import { User, UserInfo } from '@app/authentication';

@Controller('claim')
@ApiTags('claim mutation user')
export class ClaimUserQueryController {
  private readonly logger = new Logger(ClaimUserQueryController.name);

  constructor(private readonly service: ClaimQueryService) {}

  @Get()
  @ApiResponse({ type: GetListResponseDto })
  async getList(
    @Query() query: GetListRequestDto,
    @User() userInfo: UserInfo,
  ): Promise<GetListResponseDto> {
    this.logger.log(`Display list for user ${userInfo.id}`);
    return this.service.getListForUser(query, userInfo.id.toString());
  }

  @Get(':id')
  @ApiResponse({ type: GetResponseDto })
  async getClaim(
    @Param('id') id: string,
    @User() userInfo: UserInfo,
  ): Promise<GetResponseDto> {
    this.logger.log(`Display claim ${id} for user ${userInfo.id}`);
    return this.service.getForUser(id, userInfo.id.toString());
  }
}
