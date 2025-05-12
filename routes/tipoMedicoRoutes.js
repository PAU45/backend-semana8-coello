const express = require('express');
const router = express.Router();
const { createTipoMedico, getTipoMedicos, getTipoMedicoById, updateTipoMedico, deleteTipoMedico } = require('../controllers/tipoMedicoController');

// Crear tipo de médico
router.post('/tipoMedico', createTipoMedico);

// Obtener todos los tipos de médico
router.get('/tipoMedico', getTipoMedicos);

// Obtener tipo de médico por ID
router.get('/tipoMedico/:id', getTipoMedicoById);

// Actualizar tipo de médico
router.put('/tipoMedico/:id', updateTipoMedico);

// Eliminar tipo de médico
router.delete('/tipoMedico/:id', deleteTipoMedico);

module.exports = router;