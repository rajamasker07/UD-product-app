import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  _id?: string; // Optional: Mongoose adds this by default

  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop({ default: Date.now }) // Default to current timestamp
  createdAt: Date;

  @Prop({ default: Date.now }) // Default to current timestamp
  updatedAt: Date;

}

export const productSchema = SchemaFactory.createForClass(Product);
