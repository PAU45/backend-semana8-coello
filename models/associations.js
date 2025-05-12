// filepath: c:\Users\paulito\Documents\examen02-coello\backend\models\associations.js
const TipoMedico = require('./TipoMedico');
const Medicamento = require('./Medicamento');

// Define las relaciones
TipoMedico.hasMany(Medicamento, {
    foreignKey: 'tipoMedicoId',
    as: 'medicamentos'
});

Medicamento.belongsTo(TipoMedico, {
    foreignKey: 'tipoMedicoId',
    as: 'tipoMedico'
});