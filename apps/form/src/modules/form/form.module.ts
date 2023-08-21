import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FormModel, FormModelSchema } from './models';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FormModel.name, schema: FormModelSchema },
    ]),
  ],
  controllers: [FormController],
  providers: [FormService],
  exports: [FormService],
})
export class FormModule {}
