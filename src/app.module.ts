import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product, productSchema} from './product/schemas/product.schema';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/product'),
    MongooseModule.forFeature([{ name: Product.name, schema: productSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
