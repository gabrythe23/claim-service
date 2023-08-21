import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CidSchema, Claim } from '../../models';
import { ClaimMutationService, ClaimQueryService } from './services';
import { controllers } from './controllers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Claim.name, schema: CidSchema }]),
  ],
  providers: [ClaimQueryService, ClaimMutationService],
  controllers,
})
export class ClaimModule {}
