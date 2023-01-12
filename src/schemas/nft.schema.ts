import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';

import { Creator } from './creator.schema';

export type NftDocument = HydratedDocument<Nft>;

@Schema()
export class Nft {
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  mintedOn: Date;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  tags: string[];

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  highestBid: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Creator',
    required: true,
  })
  creator: Creator;
}

export const NftSchema = SchemaFactory.createForClass(Nft);
