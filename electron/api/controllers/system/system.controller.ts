import { Controller, Get } from "decorators-express";
import { Service } from "typedi";
import { app } from "../../../main";

@Controller("/system")
@Service()
export class SystemController {
  @Get("/exit")
  async exit() {
    app.quit();
  }
}
