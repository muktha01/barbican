import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Factory from "./Factory.js";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    opening_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    factory_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Factory,
        key: "id",
      },
    },
    type: {
      type: DataTypes.ENUM("gum", "ink"),
      allowNull: false,
    },
    module: {
      type: DataTypes.ENUM("gum_ink", "reel"),
      allowNull: false,
      defaultValue: "gum_ink",
    },
  },
  {
    timestamps: true,
    paranoid: true,
    deletedAt: "deletedAt",
  }
);

export default Product;
