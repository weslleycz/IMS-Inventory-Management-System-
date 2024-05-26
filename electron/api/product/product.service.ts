// import { ProductModel } from "../models/product.model";
// import { orm } from "../servers/snapjson";
import { Service } from "typedi";
import { orm } from "../servers/snapjson";
import { ProductModel } from "../models/product.model";
import { ProductCreateDTO } from "./product.dto";

@Service()
export class ProductService {
  async create({
    category,
    description,
    name,
    price,
    image,
  }: ProductCreateDTO) {
    try {
      const productCollection = await orm.collection<ProductModel>(
        "product",
        true
      );
      const product = await productCollection.add({
        category,
        description,
        name,
        price,
        image,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return product.toObject();
    } catch (error) {
      throw new Error("Não foi possível realizar a operação");
    }
  }
}
