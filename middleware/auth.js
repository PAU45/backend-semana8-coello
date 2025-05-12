const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Se espera que el token esté en el formato "Bearer token"
    if (!token) return res.status(401).json({ msg: 'Acceso no autorizado' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ msg: 'Token no válido' });

        req.user = user; // Guardamos los datos del usuario en el objeto request
        next(); // Continuamos con la siguiente función
    });
};

// Middleware para verificar los roles
const authorizeRole = (roles) => {
    return (req, res, next) => {
        // Si el rol del usuario no está en la lista de roles permitidos, denegamos el acceso
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ msg: 'Acceso denegado: no tienes permisos suficientes' });
        }
        next(); // Si el rol es válido, continuamos con la siguiente función
    };
};

module.exports = { authenticateToken, authorizeRole };
