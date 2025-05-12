const express = require('express');
const router = express.Router();
const { createOrdenCompra, getOrdenCompras, getOrdenCompraById, updateOrdenCompra, deleteOrdenCompra } = require('../controllers/ordenCompraController');

// Crear orden de compra
router.post('/ordenCompra', createOrdenCompra);

// Obtener todas las órdenes de compra
router.get('/ordenCompra', getOrdenCompras);

// Obtener orden de compra por ID
router.get('/ordenCompra/:id', getOrdenCompraById);

// Actualizar orden de compra
router.put('/ordenCompra/:id', updateOrdenCompra);

// Eliminar orden de compra
router.delete('/ordenCompra/:id', deleteOrdenCompra);

module.exports = router;
