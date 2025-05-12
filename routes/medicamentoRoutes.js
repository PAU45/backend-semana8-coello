const express = require('express');
const router = express.Router();
const { createMedicamento, getMedicamentos, getMedicamentoById, updateMedicamento, deleteMedicamento } = require('../controllers/medicamentoController');

// Crear medicamento
router.post('/medicamentos', createMedicamento);

// Obtener todos los medicamentos
router.get('/medicamentos', getMedicamentos);

// Obtener medicamento por ID
router.get('/medicamentos/:id', getMedicamentoById);

// Actualizar medicamento
router.put('/medicamentos/:id', updateMedicamento);

// Eliminar medicamento
router.delete('/medicamentos/:id', deleteMedicamento);

module.exports = router;
