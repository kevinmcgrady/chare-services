import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CreatorService } from './creator.service';

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
}
