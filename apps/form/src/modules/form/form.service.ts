import { Logger } from '@nestjs/common';
import {
  CreateFormRequestDto,
  CreateFormResponseDto,
  GetFormResponseDto,
  SubmitFormRequestDto,
} from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormModel, FormModelDocument } from './models';
import { UserInfo } from '@app/authentication';
import { ObjectId } from 'mongodb';
import { NotFoundException } from '@app/exceptions';

export class FormService {
  private readonly logger: Logger = new Logger(FormService.name);

  constructor(
    @InjectModel(FormModel.name)
    private formModelDocumentModel: Model<FormModelDocument>,
  ) {}

  async get(id: string): Promise<GetFormResponseDto> {
    const doc = await this.formModelDocumentModel.findOne({
      _id: new ObjectId(id),
    });
    if (!doc) throw new NotFoundException('Form model');

    return {
      name: doc.name,
      elements: doc.elements,
    };
  }

  async submit(
    id: string,
    data: SubmitFormRequestDto,
    userInfo: UserInfo,
  ): Promise<void> {}

  async create(
    body: CreateFormRequestDto,
    { id: userCreator }: UserInfo,
  ): Promise<CreateFormResponseDto> {
    const doc = await new this.formModelDocumentModel({
      _id: new ObjectId(),
      userCreator,
      ...body,
    }).save();

    return { _id: doc._id.toString() };
  }
}
