import { Sequelize, sequelize } from "./db";

console.log(sequelize);

const ImagesModel = sequelize.define(
  "images",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    modelId: {
      field: "model_id",
      type: Sequelize.INTEGER
    },
    parent_number: {
      type: Sequelize.INTEGER
    },
    number: {
      type: Sequelize.INTEGER
    },
    hash: {
      type: Sequelize.STRING
    },
    createdAt: {
      field: "created_at",
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      field: "updated_at",
      allowNull: false,
      type: Sequelize.DATE
    }
  }
);

export default ImagesModel;