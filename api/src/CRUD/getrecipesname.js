require('dotenv').config();
const { 
  API_KEY_1, 
  API_KEY_2, 
  API_KEY_3, 
  API_KEY_4, 
  API_KEY_5 } =
process.env;
const { Recipe, Diets, Op } = require("../db");
const axios = require("axios");

let index = 1;
let apikey

const getRecipesName = async (req, res, next) => {
  try {
    switch (index) {
      case 1: apikey = API_KEY_1; break;
      case 2: apikey = API_KEY_2; break;
      case 3: apikey = API_KEY_3; break;
      case 4: apikey = API_KEY_4; break;
      case 5: apikey = API_KEY_5; break;
      default: apikey = API_KEY_1; break;
  }

    let { title } = req.params;

    let apiRecipe;
    let dbRecipe;
    let allRec = [];

    //#region NAME
    if (title && title !== "") {
      apiRecipe = (
        await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&titleMatch=${title}&addRecipeInformation=true&number=100`
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
    if (index >= 5) {
      index = 1;
  } else {
      index++
  }
  return [index];
  }
};

module.exports = { getRecipesName };
