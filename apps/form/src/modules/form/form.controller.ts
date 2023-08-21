import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateFormRequestDto,
  CreateFormResponseDto,
  GetFormResponseDto,
  SubmitFormRequestDto,
} from './dto';
import { RequiredRole, User, UserInfo, UserRole } from '@app/authentication';
import {
  FormBooleanElement,
  FormDateElement,
  FormDateTimeElement,
  FormNumberElement,
  FormSelectElement,
  FormTextElement,
  FormTimeElement,
} from './elements';
import { FormService } from './form.service';

@Controller('')
@ApiTags('form')
@ApiExtraModels(FormBooleanElement)
@ApiExtraModels(FormDateElement)
@ApiExtraModels(FormDateTimeElement)
@ApiExtraModels(FormNumberElement)
@ApiExtraModels(FormSelectElement)
@ApiExtraModels(FormTextElement)
@ApiExtraModels(FormTimeElement)
export class FormController {
  private readonly logger: Logger = new Logger(FormController.name);

  constructor(private readonly service: FormService) {}

  @Put()
  @RequiredRole(UserRole.ADMIN)
  @ApiBody({ type: CreateFormRequestDto })
  @ApiResponse({ type: CreateFormResponseDto })
  async create(
    @Body() form: CreateFormRequestDto,
    @User() userInfo: UserInfo,
  ): Promise<CreateFormResponseDto> {
    this.logger.log(`new form with name ${form.name}`);
    return this.service.create(form, userInfo);
  }

  @Get(':id')
  @ApiBody({ type: GetFormResponseDto })
  async get(@Param('id') id: string): Promise<void> {
    this.logger.log(`get form ${id}`);
    return this.service.get(id);
  }

  @Post(':id')
  @ApiBody({ type: SubmitFormRequestDto })
  async submit(
    @Param('id') id: string,
    @User() userInfo: UserInfo,
  ): Promise<void> {
    this.logger.log(`submit form ${id} form user ${userInfo.id}`);
  }
}
