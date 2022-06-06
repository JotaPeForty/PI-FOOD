require("dotenv").config();
const { 
  API_KEY_1, 
  API_KEY_2, 
  API_KEY_3, 
  API_KEY_4, 
  API_KEY_5 } =
process.env;
const axios = require("axios");

let index = 1;
let apikey

const allDiets = async (req, res, next) => {
  
  switch (index) {
    case 1: apikey = API_KEY_1; break;
    case 2: apikey = API_KEY_2; break;
    case 3: apikey = API_KEY_3; break;
    case 4: apikey = API_KEY_4; break;
    case 5: apikey = API_KEY_5; break;
    default: apikey = API_KEY_1; break;
  }
  try {

    let apiRecipes = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&addRecipeInformation=true&number=200`
      )
    ).data.results;

   // console.log("esto trae =>", apiRecipes);


    let allDiet = apiRecipes.map((e) => {
      return {
        diets: e.diets,
      };
    });

    let data = allDiet.map((e)=>Object.values(e)).flat(2)

    let result = data.filter((item,index)=>{
        return data.indexOf(item) === index;
      })

    

    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { allDiets };
