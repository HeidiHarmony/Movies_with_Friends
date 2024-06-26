const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   favorite_genres: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favorite_movies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    about_me: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'user',
    tableName: 'user',
    freezeTableName: true,
  }
); 

module.exports = User;
