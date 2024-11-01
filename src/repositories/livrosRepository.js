const db = require('../database/connection');

exports.save = async (livro) => {
    const savedLivro = await db('livros').insert(livro).returning('*');
    return savedLivro;
};
