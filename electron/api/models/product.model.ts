export class ProductModel {
  name!: string;
  description!: string;
  price!: number;
  category!: string;
  createdAt!: Date;
  updatedAt!: Date;
  image?: string;
  readonly entity_Name: string = "product";
}
