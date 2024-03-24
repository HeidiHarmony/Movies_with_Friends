const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Mention extends Model {}

Mention.init(
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "post",
            key: "id",
        },
    },
    mentioned_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "user",
            key: "id",
        },
    },
    },
    {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "mention",
    tableName: "mentions",
    }
);

module.exports = Mention;
