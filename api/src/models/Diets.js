const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("diets",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // name:{
      //     type: DataTypes.ARRAY(DataTypes.STRING),
      // }
    },
    { timestamps: false }
  );
};
