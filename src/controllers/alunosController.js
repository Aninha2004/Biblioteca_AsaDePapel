const alunosService = require('../services/alunosService');

exports.cadastrarAluno = async (req, res) => {
    try {
        const novoAluno = await alunosService.cadastrarAluno(req.body);
        res.status(201).json(novoAluno);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
