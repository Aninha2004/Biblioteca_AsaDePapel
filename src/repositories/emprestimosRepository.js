const db = require('../database/connection');

exports.save = async (emprestimo) => {
    const savedEmprestimo = await db('emprestimos').insert(emprestimo).returning('*');
    return savedEmprestimo;
};
