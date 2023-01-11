import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Creator } from './creator.schema';

export type CollectionDocument = HydratedDocument<Collection>;

@Schema()
export class Collection {
  @Prop({ required: true })
  title: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Creator',
    required: true,
  })
  creator: Creator;

  @Prop({ required: true })
  mainImage: string;

  @Prop({ required: true, minlength: 2 })
  additionalImages: string[];
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
