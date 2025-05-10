import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Factory = sequelize.define(
  "Factory",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    factory_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_person_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_person_mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
    deletedAt: "deletedAt",
    timestamps: true,
  }
);

export default Factory;
