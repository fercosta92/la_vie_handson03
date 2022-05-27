const { Joi } = require("express-validation");

const pacienteValidator = Joi.object({
    nome: Joi.string().min(1).max(50).required(),
    email: Joi.string().email().max(150).required(),
    data_nascimento: Joi.date().required()
}).unknown();

module.exports = pacienteValidator;