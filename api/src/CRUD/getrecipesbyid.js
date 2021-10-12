require("dotenv").config();
const { API_KEY } = process.env;
const { Recipe } = require("../db");
const axios = require("axios");

const getRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let recipe;
    if (isNaN(id)) {
      recipe = await Recipe.findByPk(id);
      //console.log("esto trae",recipe)
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
        dishtypes: recipe.dishTypes,
        image: recipe.image,
        summary: recipe.summary,
        instructions: recipe.analyzedInstructions[0].steps.map(e => {
      return { number: e.number, content: e.step };
    }),
        diets: recipe.diets,
      };
    }

    return res.json(recipe);
  } catch (err) {
    next(err);
  }
};

module.exports = { getRecipeById };
