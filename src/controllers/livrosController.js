const livrosService = require('../services/livrosService');

exports.cadastrarLivro = async (req, res) => {
    try {
        const novoLivro = await livrosService.cadastrarLivro(req.body);
        res.status(201).json(novoLivro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
