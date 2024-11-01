const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Funções utilitárias para ler e escrever arquivos JSON
const readJsonFile = (filePath) => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

const writeJsonFile = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Endpoints de API
app.post('/api/alunos', (req, res) => {
    const alunos = readJsonFile(path.join(__dirname, '../data/alunos.json'));
    alunos.push(req.body);
    writeJsonFile(path.join(__dirname, '../data/alunos.json'), alunos);
    res.json({ message: 'Aluno cadastrado com sucesso!' });
});

app.post('/api/livros', (req, res) => {
    const livros = readJsonFile(path.join(__dirname, '../data/livros.json'));
    livros.push(req.body);
    writeJsonFile(path.join(__dirname, '../data/livros.json'), livros);
    res.json({ message: 'Livro cadastrado com sucesso!' });
});

app.post('/api/emprestimos', (req, res) => {
    const emprestimos = readJsonFile(path.join(__dirname, '../data/emprestimos.json'));
    emprestimos.push(req.body);
    writeJsonFile(path.join(__dirname, '../data/emprestimos.json'), emprestimos);
    res.json({ message: 'Empréstimo registrado com sucesso!' });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
