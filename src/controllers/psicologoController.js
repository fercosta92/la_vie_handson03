const Sequelize = require('sequelize');
const { Psicologo } = require("../models");
const bcrypt = require('bcrypt');

const atributosRetorno = ['id', 'nome', 'email', 'apresentacao'];

const PsicologoController = {
    
    index: async (req, res) => {
        const dados = await Psicologo.findAll({attributes: atributosRetorno});
        res.json(dados);
    },

    show: async (req, res) => {
        const { id } = req.params;
        const dado = await Psicologo.findByPk(id, {attributes: atributosRetorno});
        if(!dado){
            res.status(404).json({
                message: "Psicologo não encontrado"
            });
            return;
        }

        res.json(dado);
    },

    store: async (req, res) => {

        const psicologoJaCadastrado = await Psicologo.findOne({
            where: { email: req.body.email },
            raw: true,
        });

        if(psicologoJaCadastrado){
            res.status(400).json({
                message: 'Já existe um psicologo com esse email cadastrado'
            });
            return;
        }

        req.body.senha = await bcrypt.hash(req.body.senha, 10);
        const dados = await Psicologo.create(req.body);

        res.status(201).json(dados);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const dados = req.body;

        const psicologoJaCadastrado = await Psicologo.findOne({
            where: { 
                id: {[Sequelize.Op.not]: id},
                email: req.body.email, 
            },
            raw: true,
        });

        if(psicologoJaCadastrado){
            res.status(400).json({
                message: 'Já existe um psicologo com esse email cadastrado'
            });
            return;
        }

        const psicologo = await Psicologo.findByPk(id, {attributes: atributosRetorno});
        
        if(!psicologo){
            res.status(404).json({
                message: "Psicologo não encontrado"
            });
            return;
        }

        for(let atributo in dados){
            psicologo[atributo] = dados[atributo];
        }

        psicologo.senha = await bcrypt.hash(psicologo.senha, 10);
        
        await psicologo.save();

        const pacienteUpdate = await Psicologo.findByPk(id, {attributes: atributosRetorno});

        res.status(200).json(pacienteUpdate);
    },

    destroy: async (req, res) => {
        const { id } = req.params;
        const paciente = await Psicologo.findByPk(id);
        
        if(!paciente){
            res.status(404).json({
                message: "Psicologo não encontrado"
            });
            return;
        }

        await paciente.destroy();

        res.status(204).send("Psicologo excluido");
    },

}

module.exports = PsicologoController;