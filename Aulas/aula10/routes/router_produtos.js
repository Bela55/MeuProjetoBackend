const express = require('express');

const controllerProdutos = require("../controllers/controller_produtos")

const router = express.Router();

    router.post(
        '/', 
        controllerProdutos.validaDados, 
        controllerProdutos.criar);

    router.get(
        "/", 
        controllerProdutos.listarTodos);

    router.get(
        "/:id", 
        controllerProdutos.buscarPeloId, 
        controllerProdutos.obter );

    router.put(
        "/:id", 
        controllerProdutos.buscarPeloId, 
        controllerProdutos.validaDados, 
        controllerProdutos.atualizar
    );

    router.delete(
        "/:id", 
        controllerProdutos.buscarPeloId,
        controllerProdutos.remover
    );

module.exports = router;