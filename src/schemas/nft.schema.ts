import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
}

export const NftSchema = SchemaFactory.createForClass(Nft);
