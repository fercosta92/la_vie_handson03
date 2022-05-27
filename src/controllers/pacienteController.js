const { Paciente } = require("../models");

const PacienteController = {
    
    index: async (req, res) => {
        const dados = await Paciente.findAll();
        res.json(dados);
    },

    show: async (req, res) => {
        const { id } = req.params;
        const dado = await Paciente.findByPk(id);
        if(!dado){
            res.status(404).json({
                message: "Paciente não encontrado"
            });
            return;
        }

        res.json(dado);
    },

    store: async (req, res) => {
        const dados = await Paciente.create(req.body);
        res.status(201).json(dados);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const dados = req.body;
        const paciente = await Paciente.findByPk(id);
        
        if(!paciente){
            res.status(404).json({
                message: "Paciente não encontrado"
            });
            return;
        }

        for(let atributo in dados){
            paciente[atributo] = dados[atributo];
        }

        await paciente.save();

        res.status(200).json(paciente);
    },

    destroy: async (req, res) => {
        const { id } = req.params;
        const paciente = await Paciente.findByPk(id);
        
        if(!paciente){
            res.status(404).json({
                message: "Paciente não encontrado"
            });
            return;
        }

        await paciente.destroy();

        res.status(204).send("Paciente excluido");
    },

}

module.exports = PacienteController;