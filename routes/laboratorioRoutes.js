const express = require('express');
const router = express.Router();
const { createLaboratorio, getLaboratorios, getLaboratorioById, updateLaboratorio, deleteLaboratorio } = require('../controllers/laboratorioController');

// Crear laboratorio
router.post('/laboratorio', createLaboratorio);

// Obtener todos los laboratorios
router.get('/laboratorio', getLaboratorios);

// Obtener laboratorio por ID
router.get('/laboratorio/:id', getLaboratorioById);

// Actualizar laboratorio
router.put('/laboratorio/:id', updateLaboratorio);

// Eliminar laboratorio
router.delete('/laboratorio/:id', deleteLaboratorio);

module.exports = router;
