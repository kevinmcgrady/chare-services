import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories() {
    const categories = await this.categoryService.getAllCategories();

    if (!categories) {
      return new HttpException('No categories found', HttpStatus.NOT_FOUND);
    }

    return categories;
  }
}
