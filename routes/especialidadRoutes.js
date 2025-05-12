const express = require('express');
const router = express.Router();
const {
  createEspecialidad,
  getEspecialidades,
  getEspecialidadById,
  updateEspecialidad,
  deleteEspecialidad,
} = require('../controllers/especialidadController');

// Crear una especialidad
router.post('/especialidad', createEspecialidad);

// Obtener todas las especialidades
router.get('/especialidad', getEspecialidades);

// Obtener una especialidad por ID
router.get('/especialidad/:id', getEspecialidadById);

// Actualizar una especialidad
router.put('/especialidad/:id', updateEspecialidad);

// Eliminar una especialidad
router.delete('/especialidad/:id', deleteEspecialidad);

module.exports = router;