const express = require("express");

const routes = express.Router();

const atendimentoController = require("../controllers/atendimentoController");
const pacienteController = require("../controllers/pacienteController");
const psicologoController = require("../controllers/psicologoController");
const authController = require("../controllers/authController");
// const dashboardController = require("../controllers/dashboardController");
const authMiddleware = require("../middlewares/auth");

const authAtendimentoValidator = require("../validators/auth/atendimento");
const authPsicologoValidator = require("../validators/auth/psicologo");
const authPacienteValidator = require("../validators/auth/paciente");
const authLoginValidator = require("../validators/auth/login");

routes.post('/login', authController.login);

routes.get('/pacientes', authMiddleware, pacienteController.index);
routes.get('/pacientes/:id', authMiddleware, pacienteController.show);
routes.post('/pacientes', authMiddleware, pacienteController.store);
routes.put('/pacientes/:id', authMiddleware, pacienteController.update);
routes.delete('/pacientes/:id', authMiddleware, pacienteController.destroy);

routes.get('/psicologos', authMiddleware, psicologoController.index);
routes.get('/psicologos/:id', authMiddleware, psicologoController.show);
routes.post('/psicologos', authMiddleware, psicologoController.store);
routes.put('/psicologos/:id', authMiddleware, psicologoController.update);
routes.delete('/psicologos/:id', authMiddleware, psicologoController.destroy);

routes.get('/atendimentos', authMiddleware, atendimentoController.index);
routes.get('/atendimentos/:id', authMiddleware, atendimentoController.show);
routes.post('/atendimentos', authMiddleware, atendimentoController.store);

module.exports = routes;