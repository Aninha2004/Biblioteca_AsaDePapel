document.getElementById('formCadastroLivros').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let titulo = document.getElementById('titulo').value;
    let autor = document.getElementById('autor').value;

    let livros = JSON.parse(localStorage.getItem('livros')) || [];
    livros.push({ titulo, autor });
    localStorage.setItem('livros', JSON.stringify(livros));

    document.getElementById('formCadastroLivros').reset();
    exibirLivros();
});

function exibirLivros() {
    let livros = JSON.parse(localStorage.getItem('livros')) || [];
    let tbody = document.querySelector('#tabelaLivros tbody');
    tbody.innerHTML = '';

    livros.forEach(livro => {
        let row = `<tr><td>${livro.titulo}</td><td>${livro.autor}</td></tr>`;
        tbody.innerHTML += row;
    });
}

document.addEventListener('DOMContentLoaded', exibirLivros);
