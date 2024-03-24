const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Forum extends Model {}

Forum.init(
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    board_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "discussion_board",
            key: "id",
        },
    },
    forum_type: {
        type: DataTypes.ENUM("general", "spoiler"), // Specify the allowed values using ENUM
        allowNull: false,
    },
},
{
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "forum",
    tableName: "forum",
}
);

module.exports = Forum;