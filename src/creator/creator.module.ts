import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Creator, CreatorSchema } from '../schemas/creator.schema';
import { CreatorController } from './creator.controller';
import { CreatorService } from './creator.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Creator.name, schema: CreatorSchema }]),
  ],
  providers: [CreatorService],
  controllers: [CreatorController],
})
export class CreatorModule {}
