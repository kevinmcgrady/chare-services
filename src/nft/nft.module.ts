import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ValidateTokenMiddleware } from '../auth/middleware/validate-token/validate-token.middleware';
import { Nft, NftSchema } from '../schemas/nft.schema';
import { NftController } from './nft.controller';
import { NftService } from './nft.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Nft.name, schema: NftSchema }])],
  controllers: [NftController],
  providers: [NftService],
})
export class NftModule {}
