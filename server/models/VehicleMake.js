const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class VehicleMake extends Model {}

// create fields/columns for Traveller model
VehicleMake.init(
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
    

  }, {
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vehiclemake',
  }
);

module.exports = VehicleMake;