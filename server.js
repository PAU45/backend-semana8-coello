const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
require('./models/associations'); // Relaciones entre modelos

const authRoutes = require('./routes/authRoutes');
const medicamentoRoutes = require('./routes/medicamentoRoutes');
const detalleOrdenCompraRoutes = require('./routes/detalleOrdenCompraRoutes');
const ordenCompraRoutes = require('./routes/ordenCompraRoutes');
const laboratorioRoutes = require('./routes/laboratorioRoutes');
const userRoutes = require('./routes/UserRoutes');
const tipoMedicoRoutes = require('./routes/tipoMedicoRoutes');
const especialidadRoutes = require('./routes/especialidadRoutes');
const detalleOrdenVtaRoutes = require('./routes/detalleordenvtaRoutes'); // <-- Agregado

dotenv.config();

const app = express();
app.use(express.json());

// Configuración de CORS para permitir solicitudes desde el frontend (Vite)
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api', medicamentoRoutes);
app.use('/api', detalleOrdenCompraRoutes);
app.use('/api', ordenCompraRoutes);
app.use('/api', laboratorioRoutes);
app.use('/api', userRoutes);
app.use('/api', tipoMedicoRoutes);
app.use('/api', especialidadRoutes);
app.use('/api', detalleOrdenVtaRoutes); // <-- Agregado

// Sincronizar la base de datos
sequelize.sync({ force: false })
    .then(() => console.log('Tablas sincronizadas'))
    .catch((err) => console.log('Error al sincronizar las tablas', err));

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});