import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NftModule } from './nft/nft.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { CollectionModule } from './collection/collection.module';
import { CreatorModule } from './creator/creator.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    NftModule,
    MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING),
    CategoryModule,
    CollectionModule,
    CreatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
