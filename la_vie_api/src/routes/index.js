const express = require("express");

const routes = express.Router();

// const atendimentoController = require("../controllers/atendimentoController");
const pacienteController = require("../controllers/pacienteController");
const psicologoController = require("../controllers/psicologoController");
const authController = require("../controllers/authController");
const dashboardController = require("../controllers/dashboardController");

const authAtendimentoValidator = require("../validators/auth/atendimento");
const authPsicologoValidator = require("../validators/auth/psicologo");
const authPacienteValidator = require("../validators/auth/paciente");
const authLoginValidator = require("../validators/auth/login");


routes.get('/pacientes', pacienteController.index);
routes.get('/pacientes/:id', pacienteController.show);
routes.post('/pacientes', pacienteController.store);
routes.put('/pacientes/:id', pacienteController.update);
routes.delete('/pacientes/:id', pacienteController.destroy);

routes.get('/psicologos', psicologoController.index);
routes.get('/psicologos/:id', psicologoController.show);
routes.post('/psicologos', psicologoController.store);
routes.put('/psicologos/:id', psicologoController.update);
routes.delete('/psicologos/:id', psicologoController.destroy);


module.exports = routes;