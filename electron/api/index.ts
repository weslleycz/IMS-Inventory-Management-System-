import { AppRouter } from "decorators-express";
import express from "express";
import "reflect-metadata";
import "./controllers";
import Container, { Service } from "typedi";

@Service()
class AppExpress {
  bootstrap() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(AppRouter.getInstance());

    app.listen(3000);
  }
}

const appExpress = Container.get(AppExpress);
appExpress.bootstrap();