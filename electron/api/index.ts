import { AppRouter } from "decorators-express";
import express from "express";
import "reflect-metadata";
import Container, { Service } from "typedi";
import * as bodyParser from "body-parser";
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

    // app.use((req, res, next) => {
    //   req;
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    //   app.use(
    //     cors({
    //       origin: ["*"],
    //     })
    //   );
    //   next();
    // });

    app.use(cors());
    app.use(AppRouter.getInstance());

    app.listen(3000);
  }
}

const appExpress = Container.get(AppExpress);
appExpress.bootstrap();
