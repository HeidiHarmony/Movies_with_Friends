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
    month_name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "calendar",
        key: "id",
      },
    },
      movie_title: {
        type: DataTypes.STRING,
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
    modelName: "DiscussionBoard",
    tableName: "discussion_board",

  }
);

module.exports = DiscussionBoard;