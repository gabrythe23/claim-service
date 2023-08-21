import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cid, CidBareme, CidBaremeSchema, CidSchema } from '../../models';
import { CidService } from './cid.service';
import { CidController } from './cid.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cid.name, schema: CidSchema },
      { name: CidBareme.name, schema: CidBaremeSchema },
    ]),
  ],
  providers: [CidService],
  controllers: [CidController],
})
export class CidModule {}
