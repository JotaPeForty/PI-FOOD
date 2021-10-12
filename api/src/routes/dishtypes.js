const { Router } = require("express");
const router = Router();
const { allDishTypes } = require("../CRUD/alldishtype");



router.get("/", allDishTypes)


module.exports = router