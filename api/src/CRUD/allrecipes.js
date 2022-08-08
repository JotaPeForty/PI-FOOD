require("dotenv").config();
const { Recipe, Diets } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const allRecipes = async (req, res, next) => {

    let apiRecipes = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      )
    ).data.results;

         
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

    let dbRecipe = await Recipe.findAll({ 
      include: {
      model: Diets,
      attributes: ["name"],
      through: { attributes: [] },
    }});

    

           //const allRecipes = allInfo.concat(dbRecipe);
           

    let allRecipes = dbRecipe.concat(allInfo);
  //  console.log("esto trae",dbRecipe)
    
    res.status(200).send(allRecipes);
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
