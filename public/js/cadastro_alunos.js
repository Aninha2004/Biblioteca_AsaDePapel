document.getElementById('formCadastroAlunos').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let matricula = document.getElementById('matricula').value;

    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    alunos.push({ nome, matricula });
    localStorage.setItem('alunos', JSON.stringify(alunos));

    document.getElementById('formCadastroAlunos').reset();
    exibirAlunos();
});

function exibirAlunos() {
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    let tbody = document.querySelector('#tabelaAlunos tbody');
    tbody.innerHTML = '';

    alunos.forEach(aluno => {
        let row = `<tr><td>${aluno.nome}</td><td>${aluno.matricula}</td></tr>`;
        tbody.innerHTML += row;
    });
}

document.addEventListener('DOMContentLoaded', exibirAlunos);
