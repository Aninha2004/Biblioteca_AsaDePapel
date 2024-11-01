const emprestimosService = require('../services/emprestimosService');

exports.registrarEmprestimo = async (req, res) => {
    try {
        const emprestimo = await emprestimosService.registrarEmprestimo(req.body);
        res.status(201).json(emprestimo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
