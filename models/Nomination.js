const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Nomination extends Model {
  }

Nomination.init(
     {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    movie_title: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Movie',
            key: 'id',
        },
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    month_name: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'calendar',
            key: 'id',
        },
    },
}, 
{
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'nomination',
    tableName: "nominations",
    freezeTableName: true,
}
);

module.exports = Nomination;

