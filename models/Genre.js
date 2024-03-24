const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Genre extends Model {}

Genre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    month_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "calendar",
        key: "id",
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "genre",
    tableName: "genres",
    timestamps: false,
    freezeTableName: true,
    
  }
); 

module.exports = Genre;
