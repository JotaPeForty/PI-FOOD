const { Recipe } = require("../db");

const postRecipe = (req, res, next) => {
  const { title, summary, score, healthscore,image, diets } = req.body;

  let recipeDB = {
    title,
    score,
    healthscore,
    summary,
  };
  console.log(recipeDB);

  Recipe.create(recipeDB)
  .then((recipeDB) => {
    recipeDB.addDiets(diets);
    res.json({ ...recipeDB, diets });
    })
    .catch((error) => next(error));
};

module.exports = {postRecipe};
