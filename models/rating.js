const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");


class Rating extends Model {
  
}
Rating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: "Movie",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: "user",
        key: "id",
      },
    },
    rating_originality: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    rating_entertainment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    rating_cinematography: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    rating_acting: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    rating_storytelling: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    user_average_rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: "rating",
    tableName: "ratings",
  freezeTableName: true,
  } 
);

module.exports = Rating;

