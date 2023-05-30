const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicals extends Model {}

// create fields/columns for Traveller model
Vehicals.init(
  {

    Veh_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Veh_Make: {
      type: DataTypes.STRING,
      // prevents null values
      allowNull: false,
      // will only allow alphanumeric characters
     
    },
    Veh_Model: {
      type: DataTypes.STRING,
      allowNull: false,
      
      
    },
    Veh_Year: {
        type: DataTypes.STRING,
        allowNull: false,
        
        
      },
      Veh_Color: {
        type: DataTypes.STRING,
        allowNull: false,
        
        
      },
      Veh_Fual_Type: {
        type: DataTypes.STRING,
        allowNull: false,
        
        
      },
     
      Veh_Vin: {
        type: DataTypes.STRING,
        allowNull: true,
      },
        Veh_Is_Registered: {
            type: DataTypes.STRING,
            allowNull: true,
            
            
          },
    
      Veh_Rego_Number: {
        type: DataTypes.STRING,
        allowNull: true,
       
      },
      Veh_Rego_End_Date: {
        type: DataTypes.DATE,
        allowNull: true,
        
        
        
      },
      Veh_Purchase_From: {
        type: DataTypes.STRING,
        allowNull: true,
       
        
      },
      Veh_Purchase_Note: {
        type: DataTypes.BLOB,
        allowNull: true,
        
      },
      Veh_Purchase_PPSR: {
        type: DataTypes.BLOB,
        allowNull: true,
       
        
      },
      Veh_Purchase_Date: {
        type: DataTypes.DATE,
        allowNull: true,
        
        
      },
      Veh_Image1: {
        type: DataTypes.BLOB,
        allowNull: true,
        
      },
      Veh_Image2: {
        type: DataTypes.BLOB,
        allowNull: true,
        
        
      },
      Veh_Image3: {
        type: DataTypes.BLOB,
        allowNull: true,
        
        
      },
      Veh_Amount: {
      type: DataTypes.STRING,
      allowNull: false,
     
    
    },

  }, {
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Vehicals',
  }
);

module.exports = Vehicals;