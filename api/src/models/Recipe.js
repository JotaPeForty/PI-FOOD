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
    },
    summary: {
      type: DataTypes.STRING,
    },
    // dishtypes: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: false,
    // },
    score: {
      type: DataTypes.REAL,

    },
    healthscore: {
      type: DataTypes.REAL,
    },
    instructions: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {timestamps: false});
  
};
