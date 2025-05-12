const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Medicamento = require('./Medicamento');
const DetalleOrdenVta = require('./DetalleOrdenVta');

const OrdenVenta = sequelize.define('OrdenVenta', {
    NroOrdenVta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaEmision: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Motivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Situacion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'ordenventas', // <-- nombre real de la tabla en la BD
    timestamps: true
});

// Relación con DetalleOrdenVta
OrdenVenta.hasMany(DetalleOrdenVta, { foreignKey: 'NroOrdenVta' });
DetalleOrdenVta.belongsTo(OrdenVenta, { foreignKey: 'NroOrdenVta' });

module.exports = OrdenVenta;