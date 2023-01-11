import { CreatorDTO } from 'src/creator/models/creator.dto';

export interface CollectionDTO {
  title: string;
  creator: CreatorDTO;
  mainImage: string;
  additionalImages: string[];
}
