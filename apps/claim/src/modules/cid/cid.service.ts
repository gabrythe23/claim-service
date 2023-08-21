import { Injectable, Logger } from '@nestjs/common';
import { Cid, CidBareme, CidBaremeDocument, CidDocument } from '../../models';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaremeResponseDto } from './dto';
import { IncorrectDataException } from '@app/exceptions';
import { ObjectId } from 'mongodb';

@Injectable()
export class CidService {
  private readonly logger: Logger = new Logger(CidService.name);

  constructor(
    @InjectModel(Cid.name)
    private cidDocumentModel: Model<CidDocument>,

    @InjectModel(CidBareme.name)
    private cidBaremeDocumentModel: Model<CidBaremeDocument>,
  ) {}

  async create(cid: Cid): Promise<void> {
    await new this.cidDocumentModel({ ...cid, _id: new ObjectId() }).save();
  }

  async viewBaremeResult(a: number, b: number): Promise<BaremeResponseDto> {
    if (a > 17 || b > 17 || a < 0 || b < 0) throw new IncorrectDataException();
    const resultData = await this.cidBaremeDocumentModel.findOne({ a, b });

    return {
      result: resultData.result,
    };
  }
}
