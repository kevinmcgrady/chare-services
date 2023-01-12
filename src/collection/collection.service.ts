import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollectionDocument, Collection } from 'src/schemas/collection.schema';

@Injectable()
export class CollectionService {
  constructor(
    @InjectModel(Collection.name)
    private collectionModel: Model<CollectionDocument>,
  ) {}

  async getAllCollections() {
    return await this.collectionModel.find({}).populate('creator');
  }
}
