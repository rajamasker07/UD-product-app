import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateProductDto } from './product/dto/create-product.dto';
import { AppService } from './app.service';

@Controller('product')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAll(): Promise<any> {
    const data = await this.appService.findAll()
    return {
      status: 'success',
      message: 'Product fetched successfully',
      data: data
    }
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<any> {
    const data = await this.appService.create(createProductDto);
    return {
      status: 'success',
      message: 'Product created successfully',
      data: data
    }
  }
}
