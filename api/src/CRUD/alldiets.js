require("dotenv").config();
const { 
  API_KEY01, 
  API_KEY02, 
  API_KEY03, 
  API_KEY04, 
  API_KEY05 } =
process.env;
const axios = require("axios");
const e = require("express");

const allDiets = async (req, res, next) => {
  try {
    switch (0) {
      case 1: API_KEY = API_KEY01; break;
      case 2: API_KEY = API_KEY02; break;
      case 3: API_KEY = API_KEY03; break;
      case 4: API_KEY = API_KEY04; break;
      case 5: API_KEY = API_KEY05; break;
      default: API_KEY = API_KEY01; break;
  }

    let apiRecipes = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=200`
      )
    ).data.results;

    let allDiet = apiRecipes.map((e) => {
      return {
        diets: e.diets,
      };
    });

    let data = allDiet.map((e)=>Object.values(e)).flat(2)

    let result = data.filter((item,index)=>{
        return data.indexOf(item) === index;
      })

    

    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { allDiets };
