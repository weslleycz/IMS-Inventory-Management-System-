import { Controller, Get, Res } from "decorators-express";
import express from "express";

@Controller("/product")
export class ProductController {
  @Get("/")
  get(@Res() res: express.Response) {
    res.status(200).json([{ name: "john" }, { name: "walter" }]);
  }
}
