import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CidService } from './cid.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Cid } from '../../models';
import { Public } from '@app/authentication';
import { BaremeResponseDto } from './dto';

@Controller('cid')
@ApiTags('cid')
@Public()
export class CidController {
  private readonly logger: Logger = new Logger(CidController.name);

  constructor(private readonly service: CidService) {}

  @Post()
  @ApiBody({ type: Cid })
  async create(@Body() cid: Cid): Promise<void> {
    this.logger.log('new cid');
    await this.service.create(cid);
  }

  @Get('/accountability/:A/:B')
  async viewBaremeResult(
    @Param('A', ParseIntPipe) vehicleA: number,
    @Param('B', ParseIntPipe) vehicleB: number,
  ): Promise<BaremeResponseDto> {
    this.logger.log(`View Bareme result for A: ${vehicleA}, B: ${vehicleB}`);
    return await this.service.viewBaremeResult(vehicleA, vehicleB);
  }
}
