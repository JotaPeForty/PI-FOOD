require("dotenv").config();
const { 
  API_KEY01, 
  API_KEY02, 
  API_KEY03, 
  API_KEY04, 
  API_KEY05 } =
process.env;
const { Recipe, Diets } = require("../db");
const axios = require("axios");

const getRecipeById = async (req, res, next) => {
  try {

    switch (0) {
      case 1: API_KEY = API_KEY01; break;
      case 2: API_KEY = API_KEY02; break;
      case 3: API_KEY = API_KEY03; break;
      case 4: API_KEY = API_KEY04; break;
      case 5: API_KEY = API_KEY05; break;
      default: API_KEY = API_KEY01; break;
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
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
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
    next(err);
  }
};

module.exports = { getRecipeById };
