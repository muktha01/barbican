import { Sequelize } from "sequelize";

const sequelize = new Sequelize("packaging", "root", "root12", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
