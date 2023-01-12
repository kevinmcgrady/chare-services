import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { CollectionModule } from './collection/collection.module';
import { CreatorModule } from './creator/creator.module';
import { NftModule } from './nft/nft.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    NftModule,
    MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING),
    CategoryModule,
    CollectionModule,
    CreatorModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
