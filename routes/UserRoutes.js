
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const newUser = await User.create({ username, password, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario', details: error.message });
    }
});

// Obtener todos los usuarios (opcional)
router.get('/usuarios', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

module.exports = router;