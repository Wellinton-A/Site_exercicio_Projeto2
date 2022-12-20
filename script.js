const form = document.getElementById('formAgenda');

let nome = [];
let contato = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarItem();
    atualizaTabela();
})

function adicionarItem() {
    const nomeContato = document.getElementById('nomeContato');
    const numeroContato = document.getElementById('numeroContato');

    if (nome.includes(nomeContato.value)) {
        alert('Nome de Contato ja existe, tente novamente!')
    } else if (contato.includes(numeroContato.value)) {
        alert('Numero de Contato já existe, tente mais uma vez!')
    } else {
        nome.push(nomeContato.value);
        contato.push(numeroContato.value);

        let linha = '<tr/>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}