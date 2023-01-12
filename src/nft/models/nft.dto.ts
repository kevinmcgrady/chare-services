export interface NftDTO {
  slug: string;
  title: string;
  image: string;
  mintedOn: Date;
  description: string;
  tags: string[];
  endDate: Date;
  price: string;
  highestBid: string;
  creator: string;
}
