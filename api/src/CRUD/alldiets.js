require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");


const allDiets = async (req, res, next) => {
  

    let apiRecipes = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=200`
      )
    ).data.results;

    //console.log("esto trae =>", apiRecipes);


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
};

module.exports = { allDiets };
