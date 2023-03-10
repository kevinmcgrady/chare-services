import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Nft, NftDocument } from '../schemas/nft.schema';

@Injectable()
export class NftService {
  constructor(@InjectModel(Nft.name) private nftModel: Model<NftDocument>) {}

  async getAllNfts() {
    return await this.nftModel.find({}).populate('creator');
  }

  async getSingleNft(slug: string) {
    return await (
      await this.nftModel.findOne({ slug: slug })
    ).populate('creator');
  }

  async getAllNftsForCreator(id: string) {
    return await this.nftModel.find({ creator: id }).populate('creator');
  }
}
