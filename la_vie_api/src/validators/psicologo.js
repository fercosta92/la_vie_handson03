const { validate, Joi } = require("express-validation");

const psicologoValidator = Joi.object({
    nome: Joi.string().min(1).max(50).required(),
    email: Joi.string().email().max(150).required(),
    senha: Joi.string().min(6).max(30).required(),
    apresentacao: Joi.string().max(255).required(),
}).unknown();

module.exports = psicologoValidator;