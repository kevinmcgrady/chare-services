import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Creator, CreatorDocument } from '../schemas/creator.schema';
import { CreatorDTO } from './models/creator.dto';

@Injectable()
export class CreatorService {
  constructor(
    @InjectModel(Creator.name)
    private creatorModel: Model<CreatorDocument>,
  ) {}

  async getAllCreators() {
    return await this.creatorModel.find({});
  }

  async getOneCreator(username: string) {
    return await this.creatorModel.findOne({ username: username });
  }

  async createCreator(creator: CreatorDTO) {
    const createdCreator = new this.creatorModel(creator);
    return await createdCreator.save();
  }
}
