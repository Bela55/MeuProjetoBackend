const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        trim: true,  
        unique: [true, "Nome já cadastrado"],
        uppercase: true, 
        required: [true, "Nome é obrigatório"], 
        minLength: [3, "nome deve ter no mínimo 3 caracteres"] 
    },
    preco: { 
        type: Number, 
        required: [true, "Preco é obrigatório"],
        min : [0, "Valor mínimo do preco é ZERO"],
    },
    quantidade: { type: Number, default: 0 } 
});

module.exports = mongoose.model('Produto', produtoSchema);