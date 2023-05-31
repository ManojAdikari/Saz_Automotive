const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

// create fields/columns for Traveller model
Employee.init(
  {


    empid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    empfirstname: {
      type: DataTypes.STRING,
      // prevents null values
      allowNull: false,
     
    },
    emplastname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      
    },
    empdateofbirth: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        
      },
      empaddress: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        
      },
      empphone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
       
      },
      empemail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      empjobtitle: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
       
      },
   

  }, {
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
);

module.exports = Employee;