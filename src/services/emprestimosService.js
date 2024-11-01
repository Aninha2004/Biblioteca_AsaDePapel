const emprestimosRepository = require('../repositories/emprestimosRepository');

exports.registrarEmprestimo = async (dadosEmprestimo) => {
    if (!dadosEmprestimo.matricula || !dadosEmprestimo.livro) {
        throw new Error('Matrícula do aluno e livro são obrigatórios');
    }
    return await emprestimosRepository.save(dadosEmprestimo);
};
