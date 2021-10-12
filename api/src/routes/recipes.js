const { Router } = require("express");
const router = Router();
const { postRecipe } = require("../CRUD/postrecipe");
const { getRecipeById } = require("../CRUD/getrecipesbyid");
const { getRecipesName } = require("../CRUD/getrecipesname");
const { allRecipes } = require("../CRUD/allrecipes");

router.post("/create", postRecipe);
router.get("/:title", getRecipesName);
router.get("/id/:id", getRecipeById);
router.get("/", allRecipes);

module.exports = router;
