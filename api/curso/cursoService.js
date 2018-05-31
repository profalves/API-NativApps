const Curso = require('./curso');

//Criando REST API, adicionando CRUD para o Mongodb schema
Curso.methods(['get', 'post', 'put', 'delete']);

//Retorno do post/put
Curso.updateOptions({new: true, runValidators: true});

module.exports = Curso
