require('dotenv').config();
const { Recipe, Diets, Op } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;


const getRecipesName = async (req, res, next) => {

    let { title } = req.params;

    let apiRecipe;
    let dbRecipe;
    let allRec = [];

    //#region NAME
    if (title && title !== "") {
      apiRecipe = (
        await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&titleMatch=${title}&addRecipeInformation=true&number=100`
        )
      ).data.results;

      apiRecipe = apiRecipe.map((e)=>{
        return {
          id: e.id,
          title: e.title,
          score: e.spoonacularScore,
          healthscore: e.healthScore,
          dishtypes:e.dishTypes,
          image: e.image,
          summary: e.summary,
          instructions: e.analyzedInstructions,
          diets: e.diets,
        }
    })


      dbRecipe = await Recipe.findAll({
        where: {
          title: {
            [Op.iLike]: `%${title}%`,
          },
        },
      });
      allRec = dbRecipe.concat(apiRecipe);
    }
    // } else {
    //   apiRecipe = (
    //     await axios.get(
    //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    //     )
    //   ).data.results;

    //   apiRecipe = apiRecipe.map((e)=>{
    //     return {
    //       id: e.id,
    //       title: e.title,
    //       score: e.spoonacularScore,
    //       healthscore: e.healthScore,
    //       dishtypes:e.dishTypes,
    //       image: e.image,
    //       summary: e.summary,
    //       instructions: e.analyzedInstructions,
    //       diets: e.diets,
    //     }
    // })

    //   dbRecipe = await Recipe.findAll({ include: Diets });

    //   allRec = dbRecipe.concat(apiRecipe);
    // }
    // console.log("ESTO TRAE", apiRecipe)

    return res.send(apiRecipe);
};

module.exports = { getRecipesName };
