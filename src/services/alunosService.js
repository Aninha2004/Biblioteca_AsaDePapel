const alunosRepository = require('../repositories/alunosRepository');

exports.cadastrarAluno = async (dadosAluno) => {
    if (!dadosAluno.nome || !dadosAluno.matricula) {
        throw new Error('Nome e matrícula são obrigatórios');
    }
    return await alunosRepository.save(dadosAluno);
};
