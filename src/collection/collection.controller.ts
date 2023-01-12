import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';

import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get()
  async getAllCollections() {
    const collections = await this.collectionService.getAllCollections();

    if (!collections) {
      return new HttpException('No collections found', HttpStatus.NOT_FOUND);
    }

    return collections;
  }

  @Get('/creator/:id')
  async getAllCollectionsForCreator(@Param() params) {
    const collections =
      await this.collectionService.getAllCollectionsForCreator(params.id);

    if (!collections) {
      return new HttpException('No collections found', HttpStatus.NOT_FOUND);
    }

    return collections;
  }
}
