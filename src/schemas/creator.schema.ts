import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CreatorDocument = HydratedDocument<Creator>;

@Schema()
export class Creator {
  @Prop({
    default:
      'https://storage.googleapis.com/chare-5cc75.appspot.com/users/Avatar.svg',
  })
  image: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  emailAddress: string;
}

export const CreatorSchema = SchemaFactory.createForClass(Creator);
