const { Psicologo } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../configs/secret');

const AuthController = {
    login: async (req, res) => {
        const { email, senha} = req.body;

        const usuario = await Psicologo.findOne({
            where: { email } 
        });

        if(!usuario || !bcrypt.compareSync(senha, usuario.senha)){
            return res.status(401).json('E-mail ou senha inválido, verifique e tente novamente”');
        }

        const { senha: _senha, ...user} = usuario;

        const token = jwt.sign(user, secret.key);
        
        return res.json({token});
    }
}

module.exports = AuthController;