import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { ClaimQueryService } from '../services';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetListRequestDto, GetListResponseDto, GetResponseDto } from '../dto';
import { RequiredRole, User, UserInfo, UserRole } from '@app/authentication';

@Controller('admin/claim')
@ApiTags('claim query admin')
@RequiredRole(UserRole.ADMIN)
export class ClaimAdminQueryController {
  private readonly logger = new Logger(ClaimAdminQueryController.name);

  constructor(private readonly service: ClaimQueryService) {}

  @Get()
  @ApiResponse({ type: GetListResponseDto })
  async getList(
    @Query() query: GetListRequestDto,
    @User() userInfo: UserInfo,
  ): Promise<GetListResponseDto> {
    this.logger.log(`Display list for admin ${userInfo.id}`);
    return this.service.getListForAdmin(query);
  }

  @Get(':id')
  @ApiResponse({ type: GetResponseDto })
  async getClaim(
    @Param('id') id: string,
    @User() userInfo: UserInfo,
  ): Promise<GetResponseDto> {
    this.logger.log(`Display claim ${id} for admin ${userInfo.id}`);
    return this.service.getForAdmin(id);
  }
}
