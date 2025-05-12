const DetalleOrdenCompra = require('../models/DetalleOrdenCompra');

// Crear detalle de orden de compra
exports.createDetalleOrdenCompra = async (req, res) => {
    try {
        const detalle = await DetalleOrdenCompra.create(req.body);
        res.status(201).json(detalle);
    } catch (err) {
        res.status(400).json({ msg: "Error creando detalle de orden de compra", error: err.message });
    }
};

// Obtener todos los detalles de orden de compra
exports.getDetallesOrdenCompra = async (req, res) => {
    try {
        const detalles = await DetalleOrdenCompra.findAll();
        res.status(200).json(detalles);
    } catch (err) {
        res.status(400).json({ msg: "Error obteniendo detalles de orden de compra", error: err.message });
    }
};
