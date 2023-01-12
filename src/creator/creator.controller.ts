import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

import { CreatorService } from './creator.service';
import { CreatorDTO } from './models/creator.dto';

@Controller('creator')
export class CreatorController {
  constructor(private readonly creatorService: CreatorService) {}

  @Get()
  async getAllCreators() {
    const creators = await this.creatorService.getAllCreators();

    if (!creators) {
      return new HttpException('No creators found', HttpStatus.NOT_FOUND);
    }

    return creators;
  }

  @Get(':username')
  async getOneCreator(@Param() params) {
    const creator = await this.creatorService.getOneCreator(params.username);

    if (!creator) {
      return new HttpException('No creator found', HttpStatus.NOT_FOUND);
    }

    return creator;
  }

  @Post('create')
  async createNewCreator(@Body() creator: CreatorDTO) {
    return await this.creatorService.createCreator(creator);
  }
}
