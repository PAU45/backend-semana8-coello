const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateToken } = require('../config/auth');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Verificar si el usuario existe
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).json({ msg: 'Usuario no encontrado' });

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Contraseña incorrecta' });

    // Generar el token JWT
    const token = generateToken(user);
    res.json({ token });
};
