const express = require('express');
const app = express();
const alunosController = require('./src/controllers/alunosController');
const livrosController = require('./src/controllers/livrosController');
const emprestimosController = require('./src/controllers/emprestimosController');

app.use(express.json());

// Rotas
app.post('/alunos', alunosController.cadastrarAluno);
app.post('/livros', livrosController.cadastrarLivro);
app.post('/emprestimos', emprestimosController.registrarEmprestimo);

module.exports = app;
