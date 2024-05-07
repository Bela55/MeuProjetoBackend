const Produto = require('../models/model_produtos');

async function validaDados(req, res, next) {
    const produto = new Produto(req.body);
    try {
        await produto.validate();
        next();
    } catch (err) {
        res.status(422).json({ msg: "Dados do produto invalidos" });
    }
}

async function criar(req, res){
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
}

module.exports = { validaDados, criar }