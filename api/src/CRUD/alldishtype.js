require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
//const e = require("express");

const allDishTypes = async (req, res, next) => {
  try {
    let apiRecipes = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=200`
      )
    ).data.results;
    
    //console.log(apiRecipes) 
    let allDishType = apiRecipes.map((e) => {
      return {
        dishtypes: e.dishTypes,
      };
    });
    //console.log(allDishType) 

    let data = allDishType.map((e)=>Object.values(e)).flat(2)

    let result = data.filter((item,index)=>{
        return data.indexOf(item) === index;
      })

      //console.log(result)

    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { allDishTypes };
