require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
//const { all } = require("sequelize/types/lib/operators");
//const e = require("express");

const allSteps = async (req, res, next) => {
  try {
    let apiSteps = (
      await axios(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`
      )
    ).data.results;

    
    let allSteps = apiSteps.map((e) => {
        return {
            instructions: e.analyzedInstructions[0],
        };
    });

allSteps = allSteps.steps.map(e => {
    return { number: e.number, content: e.step };
}),

    console.log(allSteps)
    
    // let data = allDiet.map((e)=>Object.values(e)).flat(2)

    // let result = data.filter((item,index)=>{
    //     return data.indexOf(item) === index;
    //   })

     // console.log(result)

    res.send(allSteps);
  } catch (err) {
    next(err);
  }
};
module.exports = { allSteps };

