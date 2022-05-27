const { Joi } = require("express-validation");

const atendimentoValidator = Joi.object({
    data_atendimento: Joi.date().required(),
    observacao: Joi.string().required(),
    paciente_id: Joi.number().required(),
    psicologo_id: Joi.number().required()
});

module.exports = atendimentoValidator;