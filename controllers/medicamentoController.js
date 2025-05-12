const Medicamento = require('../models/Medicamento');

// Crear medicamento
exports.createMedicamento = async (req, res) => {
    console.log('POST /medicamentos body:', req.body); // <-- LOG DE ENTRADA
    try {
        const medicamento = await Medicamento.create(req.body);
        console.log('Medicamento creado:', medicamento); // <-- LOG DE SALIDA
        res.status(201).json(medicamento);
    } catch (err) {
        console.error('Error creando medicamento:', err); // <-- LOG DE ERROR
        res.status(400).json({ msg: "Error creando medicamento", error: err.message });
    }
};

// Obtener todos los medicamentos
exports.getMedicamentos = async (req, res) => {
    try {
        const medicamentos = await Medicamento.findAll();
        res.status(200).json(medicamentos);
    } catch (err) {
        res.status(400).json({ msg: "Error obteniendo medicamentos", error: err.message });
    }
};

// Obtener medicamento por ID
exports.getMedicamentoById = async (req, res) => {
    console.log('GET /medicamentos/:id params:', req.params); // <-- LOG DE ENTRADA
    try {
        const medicamento = await Medicamento.findByPk(req.params.id);
        if (!medicamento) {
            return res.status(404).json({ msg: "Medicamento no encontrado" });
        }
        res.status(200).json(medicamento);
    } catch (err) {
        res.status(400).json({ msg: "Error obteniendo medicamento", error: err.message });
    }
};

// Actualizar medicamento
exports.updateMedicamento = async (req, res) => {
    console.log('PUT /medicamentos/:id params:', req.params); // <-- LOG DE ENTRADA
    console.log('PUT /medicamentos/:id body:', req.body); // <-- LOG DE ENTRADA
    try {
        const medicamento = await Medicamento.findByPk(req.params.id);
        if (!medicamento) {
            return res.status(404).json({ msg: "Medicamento no encontrado" });
        }
        await medicamento.update(req.body);
        console.log('Medicamento actualizado:', medicamento); // <-- LOG DE SALIDA
        res.status(200).json(medicamento);
    } catch (err) {
        console.error('Error actualizando medicamento:', err); // <-- LOG DE ERROR
        res.status(400).json({ msg: "Error actualizando medicamento", error: err.message });
    }
};

// Eliminar medicamento
exports.deleteMedicamento = async (req, res) => {
    console.log('DELETE /medicamentos/:id params:', req.params); // <-- LOG DE ENTRADA
    try {
        const medicamento = await Medicamento.findByPk(req.params.id);
        if (!medicamento) {
            return res.status(404).json({ msg: "Medicamento no encontrado" });
        }
        await medicamento.destroy();
        console.log('Medicamento eliminado:', medicamento); // <-- LOG DE SALIDA
        res.status(200).json({ msg: "Medicamento eliminado" });
    } catch (err) {
        console.error('Error eliminando medicamento:', err); // <-- LOG DE ERROR
        res.status(400).json({ msg: "Error eliminando medicamento", error: err.message });
    }
};