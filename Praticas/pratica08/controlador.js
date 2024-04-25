const Contato = require('./Contato');

// d) Declare a função adicionarContato() que deve receber os parâmetros nome, email e telefone.
async function adicionarContato(nome, email, telefone) {
    // e) Dentro da função crie uma instância de Contato na constante contato.
    const contato = new Contato(nome, email, telefone);
    // f) Faça função adicionarContato() retornar o valor da função contato.inserir().
    return await contato.inserir();
}

// g) Declare a função buscarContato() que deve receber o parâmetro nome.
async function buscarContato(nome) {
    // h) Dentro da função crie uma instância de Contato na constante contato passando o valor do parâmetro nome no construtor.
    const contato = new Contato(nome);
    // i) Faça a função buscarContato() retornar o valor da função contato.buscar().
    return await contato.buscar();
}

// k) Declare a função atualizarContato() que deve receber os parâmetros nome, email e telefone.
async function atualizarContato(nome, email, telefone) {
    // l) Faça a função atualizarContato() chamar a função buscarContato() guardando o valor na constante contato. Se encontrar o contato, altere as propriedades de contato com os valores dos parâmetros.
    const contato = await buscarContato(nome);
    if (contato) {
        contato.nome = nome;
        contato.email = email;
        contato.telefone = telefone;
        // m) Faça a função atualizarContato() retornar o valor da função contato.atualizar().
        return await contato.atualizar();
    } else {
        throw new Error(`Contato '${nome}' não encontrado.`);
    }
}

// n) Declare a função removerContato() que deve receber o parâmetro nome.
async function removerContato(nome) {
    // o) Faça a função removerContato() chamar a função buscarContato() guardando o valor na constante contato. Se encontrar o contato, retorne o valor da função contato.deletar().
    const contato = await buscarContato(nome);
    if (contato) {
        return await contato.deletar();
    } else {
        throw new Error(`Contato '${nome}' não encontrado.`);
    }
}

// p) Exporte todas as funções para serem utilizadas por outros módulos.
module.exports = {
    adicionarContato,
    buscarContato,
    atualizarContato,
    removerContato
};