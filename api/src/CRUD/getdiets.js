const { Diets } = require("../db");

const preDiet = async () => {
  try {
    let arrayDiets = [
      "gluten free",
      "ketogenic",
      "dairy free",
      "vegetarian",
      "lacto ovo vegetarian",
      "fodmap friendly",
      "vegan",
      "pescatarian",
      "paleolithic",
      "primal",
      "whole 30",
    ];

    arrayDiets = arrayDiets.map((e) => {
      return {
        name: e,
      };
    });
    // console.log("esto trae",arrayDiets.map((e) => {e.name}))
    
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
