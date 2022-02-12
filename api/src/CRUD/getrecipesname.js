require('dotenv').config();
const { 
  API_KEY01, 
  API_KEY02, 
  API_KEY03, 
  API_KEY04, 
  API_KEY05 } =
process.env;
const { Recipe, Diets, Op } = require("../db");
const axios = require("axios");

const getRecipesName = async (req, res, next) => {
  try {
    
    switch (0) {
      case 1: API_KEY = API_KEY01; break;
      case 2: API_KEY = API_KEY02; break;
      case 3: API_KEY = API_KEY03; break;
      case 4: API_KEY = API_KEY04; break;
      case 5: API_KEY = API_KEY05; break;
      default: API_KEY = API_KEY01; break;
  }

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
      
  
  } catch (err) {
    next(err);
  }
};

module.exports = { getRecipesName };
