const { Diets } = require("../db");
// const axios = require("axios");
const { allDiets } = require("./alldiets");





const preDiet = async () => {
  try {
    let arrayDiets = await allDiets()

    // let arrayDiets = await axios.get("http://localhost:3001/diet")
    // arrayDiets = arrayDiets.data
  
    arrayDiets = arrayDiets.map((e) => {
      return {
        name: e,
      };
    });
    
    arrayDiets = await Promise.all(
      arrayDiets.map((e) => Diets.findOrCreate({ where: e }))
      );
 
      return "Diets cargadas exitosamente";
    } catch (error) {
      return "No se pudo cargar las diets";
    }
  };
  
  const getDiets = async (req, res, next) => {
    try {
      let arrayDiets = await Diets.findAll();
    res.json(arrayDiets);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDiets,
  preDiet,
};
