const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    creation_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "user",
            key: "id",
        },
    },
    forum_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "forum",
            key: "id",
        },
    },
},
{
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: "post",
    tableName: "posts",
}
);