const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class DiscussionBoard extends Model {}

DiscussionBoard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    month_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "month",
        key: "id",
      },
    },
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "movie",
          key: "id",
        },
      },
    },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "discussion_board",
    tableName: "discussion_board",

  }
);

module.exports = DiscussionBoard;