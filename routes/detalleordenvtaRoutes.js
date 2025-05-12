const express = require('express');
const router = express.Router();
const {
    createDetalleOrdenVta,
    getDetallesOrdenVta,
    getDetalleOrdenVtaById,
    updateDetalleOrdenVta,
    deleteDetalleOrdenVta
} = require('../controllers/detalleOrdenVtaController');

// Crear detalle de orden de venta
router.post('/detalleordenvta', createDetalleOrdenVta);

// Obtener todos los detalles de orden de venta
router.get('/detalleordenvta', getDetallesOrdenVta);

// Obtener detalle de orden de venta por ID
router.get('/detalleordenvta/:id', getDetalleOrdenVtaById);

// Actualizar detalle de orden de venta
router.put('/detalleordenvta/:id', updateDetalleOrdenVta);

// Eliminar detalle de orden de venta
router.delete('/detalleordenvta/:id', deleteDetalleOrdenVta);

module.exports = router;