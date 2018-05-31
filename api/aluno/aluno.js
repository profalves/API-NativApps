const restful = require('node-restful')
//Importando a biblioteca mongoose para usar o banco de dados MongoDB
const mongoose = restful.mongoose

/**
* Aluno:
* -> Id: String
* -> Nomes: String
* -> Sobrenomes: String
* -> genero: String
*/

const AlunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  genero: { type: String }
})

//Exporta a model para uso da API
module.exports = restful.model('Aluno', AlunoSchema)
