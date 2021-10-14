const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Competitor extends Model {};

Competitor.init(
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
        own_bike: {
            type: DataTypes.BOOLEAN,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'competitor',
    }
)

module.exports = Competitor;