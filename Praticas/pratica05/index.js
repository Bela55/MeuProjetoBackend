const express = require('express');

// Criando uma instância de uma aplicação Express
const app = express();

app.use(express.json());

// Configurando a aplicação para ouvir a porta 3000
app.listen(3000, function() {
    console.log("API está ON!");
});

// Exportando a instância da aplicação Express para outros módulos do projeto
module.exports = app;