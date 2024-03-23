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
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Comment out if not used
    trailer_url: {
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
    vote_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    winner: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'movie',
    tableName: "movies",
    freezeTableName: true,
  }
);

module.exports = Movie;