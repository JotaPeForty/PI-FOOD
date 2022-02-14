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


const allRecipes = async (req, res, next) => {
  try {
  
    switch (index) {
      case 1: apikey = API_KEY_1; break;
      case 2: apikey = API_KEY_2; break;
      case 3: apikey = API_KEY_3; break;
      case 4: apikey = API_KEY_4; break;
      case 5: apikey = API_KEY_5; break;
      default: apikey = API_KEY_1; break;
  }

    let apiRecipes = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&addRecipeInformation=true&number=100`
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
    if (index >= 5) {
      index = 1;
  } else {
      index++
  }
  return [index];
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
