document.getElementById('formEmprestimos').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let matricula = document.getElementById('matricula').value;
    let livro = document.getElementById('livro').value;

    let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    emprestimos.push({ matricula, livro });
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));

    document.getElementById('formEmprestimos').reset();
    exibirEmprestimos();
});

function exibirEmprestimos() {
    let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    let tbody = document.querySelector('#tabelaEmprestimos tbody');
    tbody.innerHTML = '';

    emprestimos.forEach((emprestimo, index) => {
        let row = `<tr><td>${emprestimo.matricula}</td><td>${emprestimo.livro}</td><td><button onclick="devolverLivro(${index})">Devolvido</button></td></tr>`;
        tbody.innerHTML += row;
    });
}

function devolverLivro(index) {
    let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    emprestimos.splice(index, 1);
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));
    exibirEmprestimos();
}

document.addEventListener('DOMContentLoaded', exibirEmprestimos);
