const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Especialidad = sequelize.define('Especialidad', {
    CodEsp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcionEsp: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Especialidad', // <-- Esto fuerza el nombre de la tabla
    timestamps: true
});

module.exports = Especialidad;