// import { ProductModel } from "../models/product.model";
// import { orm } from "../servers/snapjson";
import { Service } from "typedi";

@Service()
export class ProductService {
  async create() {
    return {
      test: "hgghjgh",
    };
  }
}
