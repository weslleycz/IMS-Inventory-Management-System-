import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  Use,
} from "decorators-express";
import express from "express";
import Container, { Service } from "typedi";
import { ProductService } from "./product.service";
import { makeValidateBody } from "express-class-validator";
import { ProductCreateDTO } from "./product.dto";

@Controller("/product")
@Service()
export class ProductController {
  @Post("")
  @Use(makeValidateBody(ProductCreateDTO))
  async create(@Res() res: express.Response, @Body() body: ProductCreateDTO) {
    try {
      const productService = Container.get(ProductService);
      const result = await productService.create(body);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  @Get("")
  async getAll(@Res() res: express.Response) {
    try {
      const productService = Container.get(ProductService);
      const result = await productService.getAll();
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  @Delete(":id")
  async delete(@Res() res: express.Response, @Param("id") id: number) {
    try {
      const productService = Container.get(ProductService);
      const result = await productService.delete(id);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
