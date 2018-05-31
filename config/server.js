/**
 * Arquivo: server.js
 * Descrição: Arquivo de configuração do serviço API
 * Autor: Rodrigo Alves
 */
 
//Setup da App:
 
//Importando os pacotes:
//BODY parse of requistion
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

//Declarando a porta do servidor
const port = 4000;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(process.env.PORT || port, function () {
  console.log("Iniciando a app na porta " + port);
});

module.exports = server
