import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClaimMutationService } from '../services';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRequestDto, CreateResponseDto } from '../dto';
import { User, UserInfo } from '@app/authentication';
import { UpdateRequestDto } from '../dto/Update.request.dto';

@Controller('admin/claim')
@ApiTags('claim mutation admin')
export class ClaimAdminMutationController {
  private readonly logger = new Logger(ClaimAdminMutationController.name);

  constructor(private readonly service: ClaimMutationService) {}

  @Post()
  @ApiBody({ type: CreateRequestDto })
  @ApiResponse({ type: CreateResponseDto })
  @HttpCode(HttpStatus.CREATED)
  async getList(
    @Body() body: CreateRequestDto,
    @User() userInfo: UserInfo,
  ): Promise<CreateResponseDto> {
    this.logger.log(`Create new claim for user ${userInfo.id}`);
    return this.service.createForUser(body, userInfo.id.toString());
  }

  @Put(':id')
  @ApiBody({ type: UpdateRequestDto })
  @HttpCode(HttpStatus.OK)
  async updateClaim(
    @Param('id') id: string,
    @Body() body: UpdateRequestDto,
    @User() userInfo: UserInfo,
  ): Promise<void> {
    this.logger.log(`Update claim ${id} for user ${userInfo.id}`);
    await this.service.updateForAdmin(id, body);
  }
}
