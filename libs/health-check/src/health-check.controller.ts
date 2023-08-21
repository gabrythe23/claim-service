import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { ApiExcludeController, ApiTags } from '@nestjs/swagger';
import { Public } from '@app/authentication';

@Controller('health-check')
@ApiTags('health-check')
@Public()
@ApiExcludeController()
export class HealthCheckController {
  constructor(private health: HealthCheckService) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([]);
  }

  @Get('health-check')
  @HealthCheck()
  healthCheck() {
    return this.health.check([]);
  }
}
