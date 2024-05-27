import { AppRouter } from "decorators-express";
import express from "express";
import "reflect-metadata";
import "./controllers";
import Container, { Service } from "typedi";
import helmet from "helmet";
import cors from "cors";

@Service()
class AppExpress {
  async bootstrap() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(helmet());

    app.use(cors());

    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      app.use(cors());
      next();
    });

    app.use(AppRouter.getInstance());

    app.listen(3000);
  }
}

const appExpress = Container.get(AppExpress);
appExpress.bootstrap();
