const OrdenCompra = require('../models/OrdenCompra');

// Crear orden de compra
exports.createOrdenCompra = async (req, res) => {
    const { fechaEmision, Situacion, Total, CodLab } = req.body;

    // Validación de campos obligatorios y tipos
    if (
        !fechaEmision ||
        !Situacion ||
        Total === undefined || Total === null || isNaN(Number(Total)) ||
        CodLab === undefined || CodLab === null || isNaN(Number(CodLab))
    ) {
        return res.status(400).json({ msg: "Faltan campos obligatorios o hay datos inválidos" });
    }

    try {
        const ordenCompra = await OrdenCompra.create({
            fechaEmision,
            Situacion,
            Total,
            CodLab
        });
        res.status(201).json(ordenCompra);
    } catch (err) {
        res.status(400).json({ msg: "Error creando orden de compra", error: err.message });
    }
};

// Obtener todas las órdenes de compra
exports.getOrdenCompras = async (req, res) => {
    try {
        const ordenes = await OrdenCompra.findAll();
        res.status(200).json(ordenes);
    } catch (err) {
        res.status(400).json({ msg: "Error obteniendo órdenes de compra", error: err.message });
    }
};

// Obtener orden de compra por ID
exports.getOrdenCompraById = async (req, res) => {
    try {
        const ordenCompra = await OrdenCompra.findByPk(req.params.id);
        if (!ordenCompra) {
            return res.status(404).json({ msg: "Orden de compra no encontrada" });
        }
        res.status(200).json(ordenCompra);
    } catch (err) {
        res.status(400).json({ msg: "Error obteniendo orden de compra", error: err.message });
    }
};

// Actualizar orden de compra
exports.updateOrdenCompra = async (req, res) => {
    try {
        const ordenCompra = await OrdenCompra.findByPk(req.params.id);
        if (!ordenCompra) {
            return res.status(404).json({ msg: "Orden de compra no encontrada" });
        }
        await ordenCompra.update(req.body);
        res.status(200).json(ordenCompra);
    } catch (err) {
        res.status(400).json({ msg: "Error actualizando orden de compra", error: err.message });
    }
};

// Eliminar orden de compra
exports.deleteOrdenCompra = async (req, res) => {
    try {
        const ordenCompra = await OrdenCompra.findByPk(req.params.id);
        if (!ordenCompra) {
            return res.status(404).json({ msg: "Orden de compra no encontrada" });
        }
        await ordenCompra.destroy();
        res.status(200).json({ msg: "Orden de compra eliminada" });
    } catch (err) {
        res.status(400).json({ msg: "Error eliminando orden de compra", error: err.message });
    }
};