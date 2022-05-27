const express = require("express");

const routes = express.Router();

/* const atendimentoController = require("../controllers/atendimentoController");
const pacienteController = require("../controllers/pacienteController");
const psicologosController = require("../controllers/psicologoController"); */
const authController = require("../controllers/authController");
const dashboardController = require("../controllers/dashboardController");

const authAtendimentoValidator = require("../validators/auth/atendimento");
const authPsicologoValidator = require("../validators/auth/psicologo");
const authPacienteValidator = require("../validators/auth/paciente");
const authLoginValidator = require("../validators/auth/login");


module.exports = routes;