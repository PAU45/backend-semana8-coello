// filepath: c:\Users\paulito\Documents\examen02-coello\backend\models\TipoMedico.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoMedico = sequelize.define('TipoMedico', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = TipoMedico;