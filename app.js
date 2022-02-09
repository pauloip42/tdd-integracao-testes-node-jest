//app.js
const Service = require('./index');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

// GET /aplicarDesconto
app.get('/aplicarDesconto/:valor/:desconto', (req, res) => {
    valor = req.params.valor;
    desconto = req.params.desconto;
    
    console.log("Antes", valor, desconto);
    if(typeof(valor) != "number"){
        valor = parseInt(req.params.valor);
    }
    if(typeof(desconto) != "number"){
        desconto = parseInt(req.params.desconto);
    }

    // const valor = parseInt(req.params.valor);
    // const desconto = parseInt(req.params.desconto);
    console.log("Depois", valor, desconto);
    const teste = Service.aplicarDesconto(valor, desconto);
    console.log('TESTE ====>', teste);
    res.json({ valorDescontado: teste });
})

if (require.main === module) {
    //inicia o servidor
    app.listen(port)
    console.log('API funcionando!')
}

module.exports = app

/*

Esta é uma web API usando Express que escuta na porta 3000 esperando por requisições GET /aplicarDesconto passando no path o valor e o desconto a ser aplicado. Internamente pega-se esses dois parâmetros passados no path, converte-os para inteiro e usa-se a função que criamos anteriormente (e cujo módulo index.js carregamos no topo deste arquivo) para calcular o valor descontado, retornando-o em um JSON na resposta.

Atenção ao if que inicia o servidor somente no caso do require.main for igual a module, pois isso evita que o servidor fique ‘pendurado’ mais tarde, durante os testes.

*/