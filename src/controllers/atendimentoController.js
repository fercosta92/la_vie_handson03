const { Atendimento, Paciente, Psicologo } = require("../models");

const opcoesConsulta = {
    attributes: ['id', 'data_atendimento', 'observacao'],
    include: [
        {
            model: Paciente,
            attributes: [
                ['id', 'id'],['nome', 'nome']
            ],
            as: 'paciente'
        }, 
        {
            model: Psicologo,
            attributes: [
                ['id', 'id'],['nome', 'nome']
            ],
            as: 'psicologo'
        }
    ]
};

const AtendimentoController = {
    
    index: async (req, res) => {
        const dados = await Atendimento.findAll(opcoesConsulta);
        res.json(dados);
    },

    show: async (req, res) => {
        const { id } = req.params;
        const dado = await Atendimento.findByPk(id, opcoesConsulta);
        if(!dado){
            res.status(404).json({
                message: "Atendimento não encontrado"
            });
            return;
        }

        res.json(dado);
    },

    store: async (req, res) => {
        const atentimento = await Atendimento.create(req.body);
        const dados = await Atendimento.findByPk(atentimento.id, opcoesConsulta);
        res.status(201).json(dados);
    }
}

module.exports = AtendimentoController;