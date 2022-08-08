require("dotenv").config();
const { Recipe, Diets } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;


const getRecipeById = async (req, res, next) => {

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
};

module.exports = { getRecipeById };
