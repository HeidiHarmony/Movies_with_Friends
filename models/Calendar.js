const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Calendar extends Model {}

Calendar.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    month_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    month_name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    genre_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'genre',
            key: 'id',
          },
        },
        movie_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'movie',
                key: 'id',
              },
            },
    date_nom_start: {
        type: DataTypes.DATE,
        allowNull: false,
        },
    date_nom_end: {
        type: DataTypes.DATE,
        allowNull: false,
        },
    date_vote_start: {
        type: DataTypes.DATE,
        allowNull: false,
        },
    date_vote_end: {
        type: DataTypes.DATE,
        allowNull: false,
        },
    date_discuss_start: {
        type: DataTypes.DATE,
        allowNull: false,
        },
    date_discuss_end: {
        type: DataTypes.DATE,
        allowNull: false,
        },
    },
    {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'calendar',
    tableName: "calendar",
    freezeTableName: true,
    }
);

module.exports = Calendar;