//5. Criar um index para chamar o controlador.
//a) Crie um arquivo index.js dentro da pasta pratica02.
//b) Abra o arquivo index.js e importe o pacote readline-sync na constante readline.
//c) Importe o controlador na constante contatoControlador.

const readline = require('readline-sync');
const contatoControlador = require('./controlador');

//d) Declare uma função menu() sem parâmetro. Faça a função imprimir as opções: 1. Adicionar contato; 2 - Listar contatos; 3 - Buscar contato; 4 - Atualizar contato; 5 - Remover contato; 6 - Sair.
function menu() {
    console.log('1. adicionarContato');
    console.log('2. listarContatos');
    console.log('3. buscarContato');
    console.log('4. atualizarContato');
    console.log('5. removerContato');
  }  

//e) Declare a função escolherOpcao() que deve receber o parâmetro opcao.
//f) Faça a função escolherOpcao() testar o parâmetro opcao com os valores do menu.
//g) Caso a opção seja 1, chame a função readline.question() para ler o nome, email e telefone do contato. Em seguida, chame a função adicionarContato() com os valores lidos. 
//h) Caso a opção seja 2, chame a função listarContatos() e imprima o nome, email e telefone de cada contato.
//i) Caso a opção seja 3, chame a função readline.question() para ler o nome do contato. Em seguida, chame a função buscarContato() com o valor lido. Se encontrar o contato, imprima o nome, email e telefone. Senão imprima a mensagem de contato não encontrado. 
//j) Caso a opção seja 4, chame a função readline.question() para ler o nome, email e telefone do contato. Em seguida, chame a função atualizarContato() com os valores lidos.
//k) Caso a opção seja 5, chame a função readline.question() para ler o nome do contato. Em seguida, chame a função removerContato() com o valor lido.
//l) Caso a opção seja 6, chame a função process.exit() para encerrar a execução.
function escolherOpcao(opcao) {
    switch (opcao) {
        case '1':
            const nome = readline.question('Digite o nome do contato: ');
            const email = readline.question('Digite o email do contato: ');
            const telefone = readline.question('Digite o telefone do contato: ');
            controladorContato.adicionarContato(nome, email, telefone);
            break;
        case '2':
            const contatos = listarContatos();
            contatos.forEach(contato => {
                console.log('Nome:', contato.nome);
                console.log('Email:', contato.email);
                console.log('Telefone:', contato.telefone);
            });
            break;
        case '3':
            const nomeBusca = readline.question('Digite o nome do contato a ser buscado: ');
            const contatoEncontrado = buscarContato(nomeBusca);
            if (contatoEncontrado) {
                console.log('Contato encontrado:');
                console.log('Nome:', contatoEncontrado.nome);
                console.log('Email:', contatoEncontrado.email);
                console.log('Telefone:', contatoEncontrado.telefone);
            } else {
                console.log('Contato não encontrado.');
            }
            break;
        case '4':
            const nomeAtualizar = readline.question('Digite o nome do contato a ser atualizado: ');
            const emailAtualizar = readline.question('Digite o novo email do contato: ');
            const telefoneAtualizar = readline.question('Digite o novo telefone do contato: ');
            controladorContato.atualizarContato(nomeAtualizar, emailAtualizar, telefoneAtualizar);
            break;
        case '5':
            const nomeRemover = readline.question('Digite o nome do contato a ser removido: ');
            controladorContato.removerContato(nomeRemover);
            break;
        case '6':
            console.log('Encerrando a execução.');
            process.exit();
            break;
        default:
            console.log('Opção inválida.');
    }
}

//m) Declare a função main() e crie um laço infinito. 
//n) Dentro do laço, chame a função readline.question() para ler a opção do menu. Em seguida, chame a função escolherOpcao() com o valor lido.
//o) Faça a chamada a função main().
function main() {
    while(true) {
      menu();
      const opcao = readline.question("Entre com uma opcao: ");
      escolherOpcao(opcao);
    }
  }
  
  main();


//p) Execute o projeto através do comando npm run dev.
//6. Subir as modificações no GitHub.
//a) Adicione todas as modificações realizadas no projeto no stage do git. 
//b) Faça um commit com as modificações adicionadas. 
//c) Caso não esteja configurado os parâmetros user.name e user.email, configure-os através do git.
//d) Envie o commit para o branch principal do seu repositório no GitHub.
  