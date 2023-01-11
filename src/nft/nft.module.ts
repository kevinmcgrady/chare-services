import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Nft, NftSchema } from '../schemas/nft.schema';
import { NftService } from './nft.service';
import { NftController } from './nft.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Nft.name, schema: NftSchema }])],
  controllers: [NftController],
  providers: [NftService],
})
export class NftModule {}
