const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {
}

Vote.init(
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'movie',
            key: 'id',
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'user',
            key: 'id',
        },
    },
    num_votes: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'vote',
    tableName: 'votes',
    freezeTableName: true
});

module.exports = Vote;
   
