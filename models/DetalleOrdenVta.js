const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DetalleOrdenVta = sequelize.define('DetalleOrdenVta', {
  NroOrdenVta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'ordenventas',
      key: 'NroOrdenVta',
    },
  },
  CodMedicamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'medicamentos',
      key: 'CodMedicamento',
    },
  },
  descripcionMed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidadRequerida: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'DetalleOrdenVta',
  timestamps: true,
});

module.exports = DetalleOrdenVta;