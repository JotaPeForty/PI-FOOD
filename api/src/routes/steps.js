const { Router } = require("express");
const router = Router();
const { allSteps } = require("../CRUD/allsteps");
//const { getDishtypes } = require("../CRUD/getdishtypes");



//router.get("/", allDishTypes)
router.get("/", allSteps)


module.exports = router