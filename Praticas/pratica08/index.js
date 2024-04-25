const readline = require('readline-sync');
const contatoControlador = require('./controlador');

// d) Declare uma função menu() sem parâmetro.
function menu() {
    console.log("1. Adicionar contato");
    console.log("2. Buscar contato");
    console.log("3. Atualizar contato");
    console.log("4. Remover contato");
    console.log("5. Sair");
}

// e) Declare a função escolherOpcao() que deve receber o parâmetro opcao.
async function escolherOpcao(opcao) {
    switch (opcao) {
        // g) Caso a opção seja 1, chame a função readline.question() para ler o nome, email e telefone do contato.
        case '1':
            const nome1 = readline.question("Nome: ");
            const email1 = readline.question("Email: ");
            const telefone1 = readline.question("Telefone: ");
            // Em seguida, chame a função adicionarContato() com os valores lidos.
            await contatoControlador.adicionarContato(nome1, email1, telefone1);
            break;
        // h) Caso a opção seja 2, chame a função readline.question() para ler o nome do contato.
        case '2':
            const nome2 = readline.question("Nome do contato a buscar: ");
            // Em seguida, chame a função buscarContato() com o valor lido.
            const contatoEncontrado = await contatoControlador.buscarContato(nome2);
            if (contatoEncontrado) {
                console.log(`Nome: ${contatoEncontrado.nome}, Email: ${contatoEncontrado.email}, Telefone: ${contatoEncontrado.telefone}`);
            } else {
                console.log("Contato não encontrado.");
            }
            break;
        // i) Caso a opção seja 3, chame a função readline.question() para ler o nome, email e telefone do contato.
        case '3':
            const nome3 = readline.question("Nome: ");
            const email3 = readline.question("Email: ");
            const telefone3 = readline.question("Telefone: ");
            // Em seguida, chame a função atualizarContato() com os valores lidos.
            await contatoControlador.atualizarContato(nome3, email3, telefone3);
            break;
        // j) Caso a opção seja 4, chame a função readline.question() para ler o nome do contato.
        case '4':
            const nome4 = readline.question("Nome do contato a remover: ");
            // Em seguida, chame a função removerContato() com o valor lido.
            await contatoControlador.removerContato(nome4);
            break;
        // k) Caso a opção seja 5, chame a função process.exit() para encerrar a execução.
        case '5':
            process.exit();
        default:
            console.log("Opção inválida.");
    }
}

// l) Declare a função main() e crie um laço infinito.
async function main() {
    while (true) {
        // m) Dentro do laço, chame a função readline.question() para ler a opção do menu.
        const opcao = readline.question("Escolha uma opção: ");
        // Em seguida, chame a função escolherOpcao() com o valor lido.
        await escolherOpcao(opcao);
    }
}

// n) Faça a chamada a função main().
main();