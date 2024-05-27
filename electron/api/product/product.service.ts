// import { ProductModel } from "../models/product.model";
// import { orm } from "../servers/snapjson";
import { Service } from "typedi";
import { ProductModel } from "../models/product.model";
import { orm } from "../servers/snapjson";
import { ProductCreateDTO } from "./product.dto";

@Service()
export class ProductService {
  async create({
    category,
    description,
    name,
    price,
    image,
    bar_code,
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
        entity_Name: "product",
        bar_code
      });
      return product.toObject();
    } catch (error) {
      throw new Error("Não foi possível realizar a operação");
    }
  }

  async getAll() {
    try {
      const productCollection = await orm.collection<ProductModel>(
        "product",
        true
      );

      const productsCollection = await productCollection.find({
        entity_Name: "product",
      });

      const products = productsCollection.map((product) => {
        return product.toObject();
      });
      return products;
    } catch (error) {
      throw new Error("Não foi possível realizar a operação");
    }
  }
}
