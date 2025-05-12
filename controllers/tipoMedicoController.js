const TipoMedico = require('../models/TipoMedico');

// Crear tipo de médico
exports.createTipoMedico = async (req, res) => {
    try {
        const tipoMedico = await TipoMedico.create(req.body);
        res.status(201).json(tipoMedico);
    } catch (err) {
        res.status(400).json({ msg: "Error creando tipo de médico", error: err.message });
    }
};

// Obtener todos los tipos de médico
exports.getTipoMedicos = async (req, res) => {
    try {
        const tipos = await TipoMedico.findAll();
        res.status(200).json(tipos);
    } catch (err) {
        res.status(400).json({ msg: "Error obteniendo tipos de médico", error: err.message });
    }
};

// Obtener tipo de médico por ID
exports.getTipoMedicoById = async (req, res) => {
    try {
        const tipo = await TipoMedico.findByPk(req.params.id);
        if (!tipo) {
            return res.status(404).json({ msg: "Tipo de médico no encontrado" });
        }
        res.status(200).json(tipo);
    } catch (err) {
        res.status(400).json({ msg: "Error obteniendo tipo de médico", error: err.message });
    }
};

// Actualizar tipo de médico
exports.updateTipoMedico = async (req, res) => {
    try {
        const tipo = await TipoMedico.findByPk(req.params.id);
        if (!tipo) {
            return res.status(404).json({ msg: "Tipo de médico no encontrado" });
        }
        await tipo.update(req.body);
        res.status(200).json(tipo);
    } catch (err) {
        res.status(400).json({ msg: "Error actualizando tipo de médico", error: err.message });
    }
};

// Eliminar tipo de médico
exports.deleteTipoMedico = async (req, res) => {
    try {
        const tipo = await TipoMedico.findByPk(req.params.id);
        if (!tipo) {
            return res.status(404).json({ msg: "Tipo de médico no encontrado" });
        }
        await tipo.destroy();
        res.status(200).json({ msg: "Tipo de médico eliminado" });
    } catch (err) {
        res.status(400).json({ msg: "Error eliminando tipo de médico", error: err.message });
    }
};