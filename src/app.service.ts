import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product/schemas/product.schema'
import { CreateProductDto } from './product/dto/create-product.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    
    return createdProduct.save();
  }
}
