const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medicamento = sequelize.define('Medicamento', {
    CodMedicamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcionMed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaFabricacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaVencimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Presentacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precioVentaUni: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    precioVentaPres: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoMedicoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'TipoMedicos',
            key: 'id'
        }
    },
    CodEsp: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Especialidad',
            key: 'CodEsp'
        }
    }
}, {
    tableName: 'Medicamentos',
    timestamps: true
});

module.exports = Medicamento;