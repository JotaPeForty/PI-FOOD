require("dotenv").config();
const { API_KEY } = process.env;
const { Recipe, Diets } = require("../db");
const axios = require("axios");

const allRecipes = async (req, res, next) => {
  try {
    let apiRecipes = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      )
    ).data.results;

    // let dbRecipe = await Recipe.findAll({
    //            model: Diets,
    //            attributes: ["name"],
    //          include: {
    //            through: { attributes: [] },
    //          },
    //        });
    allInfo = apiRecipes.map((e) => {
      return {
        id: e.id,
        title: e.title,
        score: e.spoonacularScore,
        healthscore: e.healthScore,
        image: e.image,
        diets: e.diets,
      };
    });


           //const allRecipes = allInfo.concat(dbRecipe);
           

    let dbRecipe = await Recipe.findAll({ include: Diets});
    let allRecipes = dbRecipe.concat(allInfo);
   console.log("esto trae",dbRecipe)
    
    res.status(200).send(allRecipes);
  } catch (err) {
    next(err);
  }
};

// const dbRecipe = async () => {
//   try {
//     return await Recipe.findAll({
//       include: {
//         model: Diets,
//         attributes: ["name"],
//         through: { attributes: [] },
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// const allRecipes= async () => {
//   const apiInfo = await apiRecipes();
//   const dbInfo = await dbRecipe();
//   const allRecipes = apiInfo.concat(dbInfo);
//   return allRecipes
// }

module.exports = { allRecipes };
