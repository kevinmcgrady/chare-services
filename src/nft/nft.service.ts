import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Nft, NftDocument } from '../schemas/nft.schema';

@Injectable()
export class NftService {
  constructor(@InjectModel(Nft.name) private nftModel: Model<NftDocument>) {}

  getAllNfts() {
    return 'woohoo';
  }
}
