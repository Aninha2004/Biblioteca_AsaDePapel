const livrosRepository = require('../repositories/livrosRepository');

exports.cadastrarLivro = async (dadosLivro) => {
    if (!dadosLivro.titulo || !dadosLivro.autor) {
        throw new Error('Título e autor são obrigatórios');
    }
    return await livrosRepository.save(dadosLivro);
};
