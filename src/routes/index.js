const express = require("express");

const routes = express.Router();

const atendimentoController = require("../controllers/atendimentoController");
const pacienteController = require("../controllers/pacienteController");
const psicologoController = require("../controllers/psicologoController");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/auth");
const validationMiddleware = require("../middlewares/validation");

const atendimentoValidator = require("../validators/atendimento");
const psicologoValidator = require("../validators/psicologo");
const pacienteValidator = require("../validators/paciente");
const loginValidator = require("../validators/login");

routes.post('/login', validationMiddleware(loginValidator), authController.login);

routes.get('/pacientes', authMiddleware, pacienteController.index);
routes.get('/pacientes/:id', authMiddleware, pacienteController.show);
routes.post(
    '/pacientes', authMiddleware, 
    validationMiddleware(pacienteValidator),
    pacienteController.store
);
routes.put(
    '/pacientes/:id', authMiddleware, 
    validationMiddleware(pacienteValidator),
    pacienteController.update
);
routes.delete('/pacientes/:id', authMiddleware, pacienteController.destroy);

routes.get('/psicologos', authMiddleware, psicologoController.index);
routes.get('/psicologos/:id', authMiddleware, psicologoController.show);
routes.post(
    '/psicologos', authMiddleware,
    validationMiddleware(psicologoValidator),
    psicologoController.store
);
routes.put(
    '/psicologos/:id', authMiddleware,
    validationMiddleware(psicologoValidator),
    psicologoController.update
);
routes.delete('/psicologos/:id', authMiddleware, psicologoController.destroy);

routes.get('/atendimentos', authMiddleware, atendimentoController.index);
routes.get('/atendimentos/:id', authMiddleware, atendimentoController.show);
routes.post(
    '/atendimentos', authMiddleware,
    validationMiddleware(atendimentoValidator), 
    atendimentoController.store
);

module.exports = routes;