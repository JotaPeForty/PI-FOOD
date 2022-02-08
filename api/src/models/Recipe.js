const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV1,
      allowNull: false,
      primaryKey:true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    summary: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    dishtypes: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    score: {
      type: DataTypes.REAL,
      validate: {
        notEmpty: true,
       // is: /^[a-z]+$/i,
      }

    },
    healthscore: {
      type: DataTypes.REAL,
      validate: {
        notEmpty: true,
        //is: /^[a-z]+$/i,
      }
    },
    instructions: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
  
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
  },
  {timestamps: false});
  
};
