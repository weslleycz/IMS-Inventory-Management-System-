import { AppRouter } from "decorators-express";
import express from "express";
import "./controllers";
import { sequelize } from './servers/sqlite-sequelize';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () =>{
    await sequelize.sync();
  })()

app.use(AppRouter.getInstance());

app.listen(3000);
