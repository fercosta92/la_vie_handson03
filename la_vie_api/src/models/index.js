const Atendimento = require("./atendimento");
const Paciente = require("./paciente");
const Psicologo = require("./psicologo");


Paciente.hasMany(Atendimento);
Psicologo.hasMany(Atendimento);

Atendimento.belongsTo(Paciente);
Atendimento.belongsTo(Psicologo);


module.exports = {
  Atendimento,
  Paciente,
  Psicologo
};