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

const allRecipes = async (req, res, next) => {
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
  } catch (err) {
    console.error(err);
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
