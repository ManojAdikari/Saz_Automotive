const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class VehicleModel extends Model {}

// create fields/columns for Traveller model
VehicleModel.init(
  {


    vehid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    vehmake: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    
    },
    vehmodel: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      
      },

  }, {
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vehiclemodel',
  }
);

module.exports = VehicleModel;