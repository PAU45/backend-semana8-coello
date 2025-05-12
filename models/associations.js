const TipoMedico = require('./TipoMedico');
const Especialidad = require('./Especialidad');
const Laboratorio = require('./Laboratorio');
const Medicamento = require('./Medicamento');
const OrdenCompra = require('./OrdenCompra');
const DetalleOrdenCompra = require('./DetalleOrdenCompra');
const OrdenVenta = require('./OrdenVenta');
const DetalleOrdenVta = require('./DetalleOrdenVta');
const User = require('./User');

// Relaciones TipoMedico - Medicamento
TipoMedico.hasMany(Medicamento, { foreignKey: 'CodTipoMed', as: 'medicamentos' });
Medicamento.belongsTo(TipoMedico, { foreignKey: 'CodTipoMed', as: 'tipoMedico' });

// Relaciones Especialidad - Medicamento
Especialidad.hasMany(Medicamento, { foreignKey: 'CodEspec', as: 'medicamentos' });
Medicamento.belongsTo(Especialidad, { foreignKey: 'CodEspec', as: 'especialidad' });

// Relaciones Laboratorio - OrdenCompra
Laboratorio.hasMany(OrdenCompra, { foreignKey: 'CodLab', as: 'ordenesCompra' });
OrdenCompra.belongsTo(Laboratorio, { foreignKey: 'CodLab', as: 'laboratorio' });

// Relaciones OrdenCompra - DetalleOrdenCompra
OrdenCompra.hasMany(DetalleOrdenCompra, { foreignKey: 'NroOrdenC', as: 'detalles' });
DetalleOrdenCompra.belongsTo(OrdenCompra, { foreignKey: 'NroOrdenC', as: 'ordenCompra' });

// Relaciones Medicamento - DetalleOrdenCompra
Medicamento.hasMany(DetalleOrdenCompra, { foreignKey: 'CodMedicamento', as: 'detallesCompra' });
DetalleOrdenCompra.belongsTo(Medicamento, { foreignKey: 'CodMedicamento', as: 'medicamento' });

// Relaciones OrdenVenta - DetalleOrdenVta
OrdenVenta.hasMany(DetalleOrdenVta, { foreignKey: 'NroOrdenVta', as: 'detalles' });
DetalleOrdenVta.belongsTo(OrdenVenta, { foreignKey: 'NroOrdenVta', as: 'ordenVenta' });

// Relaciones Medicamento - DetalleOrdenVta
Medicamento.hasMany(DetalleOrdenVta, { foreignKey: 'CodMedicamento', as: 'detallesVenta' });
DetalleOrdenVta.belongsTo(Medicamento, { foreignKey: 'CodMedicamento', as: 'medicamento' });

// Puedes agregar más relaciones según tu lógica de negocio