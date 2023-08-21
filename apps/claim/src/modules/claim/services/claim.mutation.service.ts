import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { CreateRequestDto, CreateResponseDto } from '../dto';
import { Claim, ClaimDocument } from '../../../models';
import { IncorrectDataException } from '@app/exceptions';
import { UpdateRequestDto } from '../dto/Update.request.dto';
import { ClaimQueryService } from './claim.query.service';

@Injectable()
export class ClaimMutationService {
  private readonly logger: Logger = new Logger(ClaimMutationService.name);

  constructor(
    @InjectModel(Claim.name)
    private claimDocumentModel: Model<ClaimDocument>,
    private queryService: ClaimQueryService,
  ) {}
  async createForUser(
    body: CreateRequestDto,
    user: string,
  ): Promise<CreateResponseDto> {
    const doc = await new this.claimDocumentModel({
      ...body,
      user_id: new ObjectId(user),
    });
    return {
      _id: doc._id.toString(),
    };
  }

  async createForAdmin(body: CreateRequestDto): Promise<CreateResponseDto> {
    if (!body.behalfOf) throw new IncorrectDataException();
    const doc = await new this.claimDocumentModel({
      ...body,
      user_id: new ObjectId(body.behalfOf),
    });
    return {
      _id: doc._id.toString(),
    };
  }

  async updateForUser(
    _id: string,
    body: UpdateRequestDto,
    user: string,
  ): Promise<void> {
    const claim = await this.queryService.getForUser(_id, user);
    await this.claimDocumentModel.updateOne(
      { _id: new ObjectId(claim._id) },
      { $set: body },
    );
  }

  async updateForAdmin(_id: string, body: UpdateRequestDto): Promise<void> {
    const claim = await this.queryService.getForAdmin(_id);
    await this.claimDocumentModel.updateOne(
      { _id: new ObjectId(claim._id) },
      { $set: body },
    );
  }
}
