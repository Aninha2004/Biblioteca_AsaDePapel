const db = require('../database/connection');

exports.save = async (aluno) => {
    const savedAluno = await db('alunos').insert(aluno).returning('*');
    return savedAluno;
};
