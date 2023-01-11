import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { NftService } from './nft.service';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Get()
  async getAllNfts() {
    const nfts = await this.nftService.getAllNfts();

    if (!nfts) {
      return new HttpException('No nfts found', HttpStatus.NOT_FOUND);
    }

    return nfts;
  }

  @Get(':slug')
  async getSingleNft(@Param() params) {
    const nft = await this.nftService.getSingleNft(params.slug);

    if (!nft) {
      return new HttpException('No nft found', HttpStatus.NOT_FOUND);
    }

    return nft;
  }
}
