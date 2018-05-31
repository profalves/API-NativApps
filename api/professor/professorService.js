const Professor = require('./professor');

//Criando REST API, adicionando CRUD para o Mongodb schema
Professor.methods(['get', 'post', 'put', 'delete']);

//Retorno do post/put
Professor.updateOptions({new: true, runValidators: true});

module.exports = Professor
