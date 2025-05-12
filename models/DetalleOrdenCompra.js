const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DetalleOrdenCompra = sequelize.define('DetalleOrdenCompra', {
  NroOrdenC: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'OrdenCompra',
      key: 'NroOrdenC',
    },
  },
  CodMedicamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Medicamentos',
      key: 'CodMedicamento',
    },
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  montouni: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
}, {
  tableName: 'DetalleOrdenCompra',
  timestamps: true,
});

module.exports = DetalleOrdenCompra;