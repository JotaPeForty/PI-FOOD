const { Router } = require("express");
const router = Router();
//const { allDishTypes } = require("../CRUD/alldishtype");
const { getDishtypes } = require("../CRUD/getdishtypes");



//router.get("/", allDishTypes)
router.get("/", getDishtypes)


module.exports = router