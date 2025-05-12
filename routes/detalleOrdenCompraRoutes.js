const express = require('express');
const router = express.Router();
const { createDetalleOrdenCompra, getDetallesOrdenCompra } = require('../controllers/detalleOrdenCompraController');

// Crear detalle de orden de compra
router.post('/detalleOrdenCompra', createDetalleOrdenCompra);

// Obtener todos los detalles de orden de compra
router.get('/detalleOrdenCompra', getDetallesOrdenCompra);

module.exports = router;
