const Aluno = require('./aluno');

//Criando REST API, adicionando CRUD para o Mongodb schema
Aluno.methods(['get', 'post', 'put', 'delete']);

//Retorno do post/put
Aluno.updateOptions({new: true, runValidators: true});

module.exports = Aluno
