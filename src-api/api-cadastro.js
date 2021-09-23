//api-cadastro.js
var http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(require("cors")());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!", dados: cadastros});
})

const cadastros = [];
app.post('/cadastro', (req, res, next) => { 
    console.log("Cadastro recebido!");
    //salva no banco de dados
    cadastros.push({
        nome: req.body.nome, 
        idade: parseInt(req.body.idade), 
        uf: req.body.estado
    });
    res.json({message: "Tudo ok por aqui!", dados: cadastros});
}) 

var server = http.createServer(app); 
server.listen(3031);
console.log("Servidor executando na porta 3031...");