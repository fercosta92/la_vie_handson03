const jwt = require('jsonwebtoken');
const secret = require('../configs/secret');

module.exports = (req, res, next) => {
    try {

        const token = req.headers?.authorization;
        
        if(!token){
            res.status(403).json({message: 'Credenciais inválidas'});
            return
        }

        const decodedToken = jwt.verify(token, secret.key);

        if (!decodedToken.email || !decodedToken.id) {
            res.status(403).json({message: 'Credenciais inválidas'});
            return;
        }

        req.body.psicologo_id = decodedToken.id;
        next();
    } catch(e) {
        res.status(403).json({
            message: 'Credenciais inválidas'
        });
    }
};