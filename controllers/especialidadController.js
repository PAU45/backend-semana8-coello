const Especialidad = require('../models/Especialidad');

// Crear especialidad
exports.createEspecialidad = async (req, res) => {
  try {
    const { descripcionEsp } = req.body;
    if (!descripcionEsp || descripcionEsp.trim() === '') {
      return res.status(400).json({ msg: 'La descripción es obligatoria.' });
    }
    const especialidad = await Especialidad.create({ descripcionEsp });
    res.status(201).json(especialidad);
  } catch (err) {
    res.status(400).json({ msg: 'Error creando especialidad', error: err.message });
  }
};

// Obtener todas las especialidades
exports.getEspecialidades = async (req, res) => {
  try {
    const especialidades = await Especialidad.findAll();
    res.status(200).json(especialidades);
  } catch (err) {
    res.status(400).json({ msg: 'Error obteniendo especialidades', error: err.message });
  }
};

// Obtener especialidad por ID
exports.getEspecialidadById = async (req, res) => {
  try {
    const especialidad = await Especialidad.findByPk(req.params.id);
    if (!especialidad) {
      return res.status(404).json({ msg: 'Especialidad no encontrada.' });
    }
    res.status(200).json(especialidad);
  } catch (err) {
    res.status(400).json({ msg: 'Error obteniendo especialidad', error: err.message });
  }
};

// Actualizar especialidad
exports.updateEspecialidad = async (req, res) => {
  try {
    const especialidad = await Especialidad.findByPk(req.params.id);
    if (!especialidad) {
      return res.status(404).json({ msg: 'Especialidad no encontrada.' });
    }
    await especialidad.update(req.body);
    res.status(200).json(especialidad);
  } catch (err) {
    res.status(400).json({ msg: 'Error actualizando especialidad', error: err.message });
  }
};

// Eliminar especialidad
exports.deleteEspecialidad = async (req, res) => {
  try {
    const especialidad = await Especialidad.findByPk(req.params.id);
    if (!especialidad) {
      return res.status(404).json({ msg: 'Especialidad no encontrada.' });
    }
    await especialidad.destroy();
    res.status(200).json({ msg: 'Especialidad eliminada.' });
  } catch (err) {
    res.status(400).json({ msg: 'Error eliminando especialidad', error: err.message });
  }
};