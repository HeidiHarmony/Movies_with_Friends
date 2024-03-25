const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overview: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    // Comment out if not used
    poster_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'genre',
        key: 'id',
      },
    },
    is_winner: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'movie',
    tableName: "movie",
    freezeTableName: true,
  }
);

module.exports = Movie;