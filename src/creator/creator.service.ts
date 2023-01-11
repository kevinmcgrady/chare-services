import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatorDocument, Creator } from 'src/schemas/creator.schema';

@Injectable()
export class CreatorService {
  constructor(
    @InjectModel(Creator.name)
    private creatorModel: Model<CreatorDocument>,
  ) {}

  async getAllCreators() {
    return await this.creatorModel.find({});
  }
}
