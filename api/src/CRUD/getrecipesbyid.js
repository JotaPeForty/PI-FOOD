require("dotenv").config();
const { 
  API_KEY_1, 
  API_KEY_2, 
  API_KEY_3, 
  API_KEY_4, 
  API_KEY_5 } =
process.env;
const { Recipe, Diets } = require("../db");
const axios = require("axios");

let index = 1;
let apikey

const getRecipeById = async (req, res, next) => {
  try {
  
    switch (index) {
      case 1: apikey = API_KEY_1; break;
      case 2: apikey = API_KEY_2; break;
      case 3: apikey = API_KEY_3; break;
      case 4: apikey = API_KEY_4; break;
      case 5: apikey = API_KEY_5; break;
      default: apikey = API_KEY_1; break;
  }

    const { id } = req.params;
    let recipe;
    if (isNaN(id)) {
      recipe = await Recipe.findByPk(id, {
         include: {
        model: Diets,
        attributes: ["name"],
        through: { attributes: [] },
      }})
    } else {
      recipe = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apikey}`
      );
      recipe = recipe.data;

      recipe = {
        id: recipe.id,
        title: recipe.title,
        score: recipe.spoonacularScore,
        healthscore: recipe.healthScore,
        image: recipe.image,
        summary: recipe.summary,
        diets: recipe.diets,
      };
    }

    return res.json(recipe);
  } catch (err) {
    if (index >= 5) {
      index = 1;
  } else {
      index++
  }
  return [index];
  }
};

module.exports = { getRecipeById };
