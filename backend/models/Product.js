// Product.js
import { DataTypes } from "sequelize";

// Import the Factory model here to reference it later
import Factory from "./Factory.js";  // Import Factory model
import sequelize from "../config/db.js";

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
        model: Factory,  // Reference to the Factory model directly
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
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
    paranoid: true,
    deletedAt: "deletedAt",
    timestamps: true,
  }
);

// Establish a relationship between Product and Factory
Product.belongsTo(Factory, { foreignKey: "factory_id" });
Factory.hasMany(Product, { foreignKey: "factory_id" });

export default Product;
