const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
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
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKWsvadyK1FqRocRR-wdxe-1Ti74lV26nlA&usqp=CAU",
      validate: {
        notEmpty: true
      }
    },
    summary: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {timestamps: false});
  
};
