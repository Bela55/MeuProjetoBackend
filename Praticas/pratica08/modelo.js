const conectarDb = require('./database.js');

const db = conectarDb();

const collection = db.collection('contatos');
class Contato {
    constructor(nome, email, telefone) {
        this.id = null;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    };
}; 

async function inserir() {
    try {
        const result = await collection.insertOne({ nome: this.nome, email: this.email, telefone: this.telefone });
        this.id = result.ops[0]._id;
    } catch (error) {
        console.error("Erro ao inserir contato:", error);
        throw error;
    };
};

async function alterar() {
    try {
        await collection.updateOne({ _id: this.id }, { $set: { nome: this.nome, email: this.email, telefone: this.telefone } });
    } catch (error) {
        console.error("Erro ao alterar contato:", error);
        throw error;
    };
};

async function deletar() {
    try {
        await collection.deleteOne({ _id: this.id });
    } catch (error) {
        console.error("Erro ao deletar contato:", error);
        throw error;
    };
};

async function buscar() {
    try {
        const contatoEncontrado = await collection.findOne({ nome: this.nome });
        if (contatoEncontrado) {
            this.id = contatoEncontrado._id;
            this.nome = contatoEncontrado.nome;
            this.email = contatoEncontrado.email;
            this.telefone = contatoEncontrado.telefone;
        }
    } catch (error) {
        console.error("Erro ao buscar contato:", error);
        throw error;
    };
};

module.exports = Contato;
