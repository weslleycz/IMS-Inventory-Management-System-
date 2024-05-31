import * as bodyParser from "body-parser";
import { AppRouter } from "decorators-express";
import express from "express";
import "reflect-metadata";
import Container, { Service } from "typedi";
import "./controllers";
import cors from "cors";
import helmet from "helmet";

@Service()
class AppExpress {
  async bootstrap() {
    const app = express();

    app.use(helmet());

    app.use(bodyParser.json({ limit: "500mb" }));
    app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

    app.use(cors());
    app.use(AppRouter.getInstance());

    app.listen(3000);
  }
}

const appExpress = Container.get(AppExpress);
appExpress.bootstrap();
