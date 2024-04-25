const { MongoClient } = require('mongodb');

const url = "mongodb+srv://Bela55:Isinha2002.gnhkwzw.mongodb.net/";

const client = new MongoClient(url);

async function conectarDb() {
    try{
    await client.connect();
        console.log("Conexão bem-sucedida ao banco de dados");

        // Retorna o banco de dados 'agenda'
        return client.db('agenda');
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error; // Lança o erro para que ele seja tratado pelo chamador da função
    }
}

const conectarDb = require('./database.js');



