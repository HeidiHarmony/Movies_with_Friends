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
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true;
    underscored: true,
    modelName: "rating",
    tableName: "ratings",
  freezeTableName: true,
  } 
);

module.exports = Rating;

