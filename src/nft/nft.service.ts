import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Nft, NftDocument } from '../schemas/nft.schema';

@Injectable()
export class NftService {
  constructor(@InjectModel(Nft.name) private nftModel: Model<NftDocument>) {}

  async getAllNfts() {
    return await this.nftModel.find({});
  }

  async getSingleNft(slug: string) {
    return await this.nftModel.findOne({ slug: slug });
  }
}
