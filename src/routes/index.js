//requiero la clase Router del módulo de express
const router = require('express').Router()

//requiero las rutas de products y test
const products = require('./productos.js')
const test = require('./test.js')

//defino que las rutas de products contengan "/"
router.use('/', products)

router.use('/', test)

//exporto para poder usar el enrrutador principal en app.js
module.exports = router