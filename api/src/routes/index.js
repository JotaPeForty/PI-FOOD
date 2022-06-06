const { Router } = require('express');
//const { getDiets } = require('../CRUD/getdiets');
const recipes = require('./recipes')
const diets = require('./diets')
const dishtypes = require('./dishtypes')
const steps = require('./steps')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", recipes);
router.use("/diet", diets)
router.use("/dishtypes", dishtypes)
router.use("/steps", steps)

module.exports = router;
