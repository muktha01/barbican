import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Supplier = sequelize.define(
  "Supplier",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    supplier_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gst_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: false,
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

export default Supplier;
