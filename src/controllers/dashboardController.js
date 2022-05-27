const { Atendimento, Paciente, Psicologo } = require("../models/");

const DashboardController = {
    pacientes: async (req, res) => {
        const {count , rows} = await Paciente.findAndCountAll();
        res.json(count);
    },
    
    psicologos: async (req, res) => {
        const {count , rows} = await Psicologo.findAndCountAll();
        res.json(count);
    },

    atendimentos: async (req, res) => {
        const {count , rows} = await Atendimento.findAndCountAll();
        res.json(count);
    },

    media: async (req, res) => {
        const atendimentos = await Atendimento.findAndCountAll();
        const numeroAtendimentos = atendimentos.count;

        const psicologos = await Psicologo.findAndCountAll();
        const numeroPsicologos = psicologos.count;

        const media = numeroAtendimentos/numeroPsicologos;
        res.json(media);
    }
};

module.exports = DashboardController;