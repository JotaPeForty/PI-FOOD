const { Dishtypes } = require("../db");
//const { alldishtypes } = require("./alldishtype")

const preDishtypes = async () => {
  try {
    let arrayDishTypes = [
      "side dish",
      "lunch",
      "main course",
      "main dish",
      "dinner",
      "morning meal",
      "brunch",
      "breakfast",
      "soup",
      "salad",
      "condiment",
      "dip",
      "sauce",
      "spread"
    ]

    //console.log("esto trae", arrayDishTypes)
    //let arrayDishTypes = alldishtypes()

    arrayDishTypes = arrayDishTypes.map((e) => {
      return {
        name: e,
      };
    });
    
    arrayDishTypes = await Promise.all(
      arrayDishTypes.map((e) => Dishtypes.findOrCreate({ where: e })));


      
      
      return "Dishtypes cargadas exitosamente";
    } catch (error) {
      return "No se pudo cargar las Dishtypes";
    }
  };
  
  const getDishtypes = async (req, res, next) => {
    try {
      let arrayDishTypes = await Dishtypes.findAll();
    res.json(arrayDishTypes);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDishtypes,
  preDishtypes,
};
