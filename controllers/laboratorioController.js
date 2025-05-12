const Laboratorio = require('../models/Laboratorio');

// Crear laboratorio
exports.createLaboratorio = async (req, res) => {
    try {
        const laboratorio = await Laboratorio.create(req.body);
        res.status(201).json(laboratorio);
    } catch (err) {
        res.status(400).json({ msg: "Error creando laboratorio", error: err.message });
    }
};

// Obtener todos los laboratorios
exports.getLaboratorios = async (req, res) => {
    try {
        const laboratorios = await Laboratorio.findAll();
        res.status(200).json(laboratorios);
    } catch (err) {
        res.status(400).json({ msg: "Error obteniendo laboratorios", error: err.message });
    }
};

// Obtener laboratorio por ID
exports.getLaboratorioById = async (req, res) => {
    try {
        const laboratorio = await Laboratorio.findByPk(req.params.id);
        if (!laboratorio) {
            return res.status(404).json({ msg: "Laboratorio no encontrado" });
        }
        res.status(200).json(laboratorio);
    } catch (err) {
        res.status(400).json({ msg: "Error obteniendo laboratorio", error: err.message });
    }
};

// Actualizar laboratorio
exports.updateLaboratorio = async (req, res) => {
    try {
        const laboratorio = await Laboratorio.findByPk(req.params.id);
        if (!laboratorio) {
            return res.status(404).json({ msg: "Laboratorio no encontrado" });
        }
        await laboratorio.update(req.body);
        res.status(200).json(laboratorio);
    } catch (err) {
        res.status(400).json({ msg: "Error actualizando laboratorio", error: err.message });
    }
};

// Eliminar laboratorio
exports.deleteLaboratorio = async (req, res) => {
    try {
        const laboratorio = await Laboratorio.findByPk(req.params.id);
        if (!laboratorio) {
            return res.status(404).json({ msg: "Laboratorio no encontrado" });
        }
        await laboratorio.destroy();
        res.status(200).json({ msg: "Laboratorio eliminado" });
    } catch (err) {
        res.status(400).json({ msg: "Error eliminando laboratorio", error: err.message });
    }
};
