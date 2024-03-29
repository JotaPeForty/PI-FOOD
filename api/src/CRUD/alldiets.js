require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");


const allDiets = async () => {
  

    let apiRecipes = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=200`
      )
    ).data.results;

    
    
    let allDiet = apiRecipes.map((e) => {
      return {
        diets: e.diets,
      };
    });
    
    let data = allDiet.map((e)=>Object.values(e)).flat(2)
    
    let result = data.filter((item,index)=>{
      return data.indexOf(item) === index;
    })
    
    //console.log("esto trae =>", result);
    
    
    return result
  };
  



module.exports = { allDiets };
