const DetalleOrdenVta = require('../models/DetalleOrdenVta');

// Crear detalle de orden de venta
exports.createDetalleOrdenVta = async (req, res) => {
    try {
        const detalle = await DetalleOrdenVta.create(req.body);
        res.status(201).json(detalle);
    } catch (err) {
        res.status(400).json({ msg: "Error creando detalle de orden de venta", error: err.message });
    }
};

// Obtener todos los detalles de orden de venta
exports.getDetallesOrdenVta = async (req, res) => {
    try {
        const detalles = await DetalleOrdenVta.findAll();
        res.status(200).json(detalles);
    } catch (err) {
        res.status(400).json({ msg: "Error obteniendo detalles de orden de venta", error: err.message });
    }
};

// Obtener detalle por ID
exports.getDetalleOrdenVtaById = async (req, res) => {
    try {
        const detalle = await DetalleOrdenVta.findByPk(req.params.id);
        if (!detalle) {
            return res.status(404).json({ msg: "Detalle no encontrado" });
        }
        res.status(200).json(detalle);
    } catch (err) {
        res.status(400).json({ msg: "Error obteniendo detalle", error: err.message });
    }
};

// Actualizar detalle
exports.updateDetalleOrdenVta = async (req, res) => {
    try {
        const detalle = await DetalleOrdenVta.findByPk(req.params.id);
        if (!detalle) {
            return res.status(404).json({ msg: "Detalle no encontrado" });
        }
        await detalle.update(req.body);
        res.status(200).json(detalle);
    } catch (err) {
        res.status(400).json({ msg: "Error actualizando detalle", error: err.message });
    }
};

// Eliminar detalle
exports.deleteDetalleOrdenVta = async (req, res) => {
    try {
        const detalle = await DetalleOrdenVta.findByPk(req.params.id);
        if (!detalle) {
            return res.status(404).json({ msg: "Detalle no encontrado" });
        }
        await detalle.destroy();
        res.status(200).json({ msg: "Detalle eliminado" });
    } catch (err) {
        res.status(400).json({ msg: "Error eliminando detalle", error: err.message });
    }
};