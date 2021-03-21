const express = require('express')
const controllers = require('../controllers/tipoMonedas')

const router = express.Router()

router.get('/', controllers.getAllTipoMonedas)
router.get('/cambio_del_dia', controllers.getCambioDelDia)
router.get('/cambio_hace_dias', controllers.tipoCambioFechaInicial)

module.exports = router