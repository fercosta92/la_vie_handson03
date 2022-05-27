const createHttpError = require('http-errors');

module.exports = function(validator) {
    if(!validator.validateAsync){
        throw new Error('Erro ao carregar a validação')
    }

    return async (req, res, next) => {
        try {
            const dadosValidados = await validator.validateAsync(req.body)
            req.body = dadosValidados;
            next()
        } catch (err) {
            if(err.isJoi) {
                return next(createHttpError(400, {message: err.message}))
            }
            next(createHttpError(500))
        }
    }
}