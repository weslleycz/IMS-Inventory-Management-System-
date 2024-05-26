import { Sequelize } from 'sequelize';
import { app } from '../../main';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    // storage: `/${app.getPath('appData')}/db.sqlite`,
    storage: `./db.sqlite`,
    logging: false,
  });
  
  export { sequelize };