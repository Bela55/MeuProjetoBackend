const readline = require('readline-sync');

const Contato = require('./modelo.js');

const contatos = [{nome: "Isabela", email: "isa@iesb.edu.br", telefone: "4545445"}];

function adicionarContato() {
    const nome = 
      readline.question('Informe o nome do contato: ');
    const email = 
      readline.question('Informe o email do contato: ');
    const telefone = 
      readline.question('Informe o telefone do contato: ');
    const novo = new Contato(nome, telefone);
    contatos.push(novo);
    readline.question("Pressione ENTER para continuar");
  }

  function listarContatos() {
    contatos.forEach(contato => 
      console.log(contato.nome, '-', contato.email, '-', contato.telefone));
    readline.question("Pressione ENTER para continuar");
  }

//Declare a função buscarContato() que deve receber o parâmetro nome.
//j) Faça a função buscarContato() localizar um contato no array contatos pelo nome.
  function buscarContato() {
    const nome = 
      readline.question("Informe o nome do contato: ");
    const buscarContato = 
      contatos.find(contato => contato.nome === nome);
    if (buscarContato) {
      console.log(buscarContato.nome, '-', 
        buscarContato.telefone);
    } else {
      console.log("Contato não localizado");
    }
    readline.question("Pressione ENTER para continuar");
 }
   
//k) Declare a função atualizarContato() que deve receber os parâmetros nome, email e telefone.
//l) Faça a função atualizarContato() chamar a função buscarContato(). Se encontrar o contato, atualize as propriedades email e telefone com os parâmetros da função.
 function atualizarContato() {
    const nome = 
        readline.question("Informe o nome do contato: ");
    const buscarContato = 
    contatos.find(contato => contato.nome === nome);
    if (buscarContato) {
    const telefone =
        readline.question("Informe o novo telefone do contato: ");
    buscarContato.telefone = telefone;
    }else if (buscarContato) {
        const email =
            readline.question("Informe o novo email do contato: ");
        buscarContato.email = email;
    } else {
    console.log("Contato não localizado");
}
readline.question("Pressione ENTER para continuar");
 }
   
//m) Declare a função removerContato() que deve receber o parâmetro nome.
//n) Faça a função removerContato() localizar a posição de um contato no array contatos pelo nome. Se encontrar, recorte um elemento do array contatos a partir da posição do contato.
function removerContato() {
    const nome = 
        readline.question("Informe o nome do contato: ");
    const posicao = 
        contatos.findIndex(contato => contato.nome === nome);
    if (posicao>=0) {
        contatos.splice(posicao, 1);
    } else {
        console.log("Contato não localizado");
    }
        readline.question("Pressione ENTER para continuar");

}

//o) Exporte todas as funções para serem utilizadas por outros módulos. 
module.exports = {adicionarContato, listarContatos, buscarContato, atualizarContato, removerContato};
    


  