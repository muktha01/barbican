// Factory.js
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
      unique: true,
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
      validate: {
        is: {
          args: /^[0-9]{10}$/,
          msg: "Invalid phone number format",
        },
      },
    },
  },
  {
    paranoid: true,
    deletedAt: "deletedAt",
    timestamps: true,
  }
);

export default Factory;
