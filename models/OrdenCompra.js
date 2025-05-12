const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrdenCompra = sequelize.define('OrdenCompra', {
  NroOrdenC: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fechaEmision: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Situacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Total: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  CodLab: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'laboratorios', // minúscula y plural, igual que en el modelo Laboratorio
      key: 'CodLab',
    },
  },
  NrofacturaProv: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'ordencompra', // <-- minúscula y singular/plural, igual que en la BD
  timestamps: true,
});

module.exports = OrdenCompra;