const { Router } = require("express");
const router = Router();
const { getDiets } = require("../CRUD/getdiets");
const {allDiets} = require("../CRUD/allDiets");

router.get("/type", getDiets);
router.get("/", allDiets)


module.exports = router