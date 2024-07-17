import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_ADDON_DB!,
  process.env.MYSQL_ADDON_USER!,
  process.env.MYSQL_ADDON_PASSWORD!,
  {
    host: process.env.MYSQL_ADDON_HOST,
    port: parseInt(process.env.MYSQL_ADDON_PORT!, 10),
    dialect: 'mysql',
  }
);

export default sequelize;

