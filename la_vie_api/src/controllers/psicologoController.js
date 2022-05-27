const { Psicologo } = require("../models/");

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
        const dados = await Psicologo.create(req.body);
        res.status(201).json(dados);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const dados = req.body;
        const paciente = await Psicologo.findByPk(id, {attributes: atributosRetorno});
        
        if(!paciente){
            res.status(404).json({
                message: "Psicologo não encontrado"
            });
            return;
        }

        for(let atributo in dados){
            paciente[atributo] = dados[atributo];
        }

        await paciente.save();

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