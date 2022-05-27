const { Joi } = require("express-validation");

const loginValidator = Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.required(),
});

module.exports = loginValidator;