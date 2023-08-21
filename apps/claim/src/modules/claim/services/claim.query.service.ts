import { Injectable, Logger } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { GetListRequestDto, GetListResponseDto, GetResponseDto } from '../dto';
import { Claim, ClaimDocument } from '../../../models';
import { NotAuthorizedException, NotFoundException } from '@app/exceptions';

@Injectable()
export class ClaimQueryService {
  private readonly logger: Logger = new Logger(ClaimQueryService.name);

  constructor(
    @InjectModel(Claim.name)
    private claimDocumentModel: Model<ClaimDocument>,
  ) {}

  async getListForUser(
    paginator: GetListRequestDto,
    user: string,
  ): Promise<GetListResponseDto> {
    return this.getList(paginator, user);
  }

  async getListForAdmin(
    paginator: GetListRequestDto,
  ): Promise<GetListResponseDto> {
    return this.getList(paginator);
  }

  async getForUser(_id: string, me: string): Promise<GetResponseDto> {
    const claim = await this.get(_id);
    if (claim.user_id !== me) throw new NotAuthorizedException();
    return claim;
  }

  async getForAdmin(_id: string): Promise<GetResponseDto> {
    return await this.get(_id);
  }

  private async get(_id: string): Promise<GetResponseDto> {
    const doc = await this.claimDocumentModel
      .findOne({ _id: new ObjectId(_id) })
      .lean();
    if (!doc) throw new NotFoundException();
    return {
      _id: doc._id.toString(),
      user_id: doc.user_id.toString(),
      claim_category: doc.claim_category,
      claim_status: doc.claim_status,
      claim_description: doc.claim_description,
      files: doc.files,
      date_started: doc.date_started,
      date_closed: doc.date_closed,
      data_created: doc.data_created,
      date_updated: doc.date_updated,
    };
  }

  private async getList(
    { skip, limit }: GetListRequestDto,
    user?: string,
  ): Promise<GetListResponseDto> {
    const filterQuery: FilterQuery<ClaimDocument> = {};

    if (user) filterQuery['user_id'] = user;

    const list = await this.claimDocumentModel
      .find(filterQuery)
      .limit(limit)
      .skip(skip)
      .lean();

    return {
      count: await this.claimDocumentModel.countDocuments(filterQuery),
      items: list.map((r) => ({
        _id: r._id.toString(),
        user_id: r.user_id.toString(),
        claim_category: r.claim_category,
        claim_status: r.claim_status,
        claim_description: r.claim_description,
        date_started: r.date_started,
        date_closed: r.date_closed,
        data_created: r.data_created,
        date_updated: r.date_updated,
      })),
    };
  }
}
