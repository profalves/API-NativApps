const restful = require('node-restful')
//Importando a biblioteca mongoose para usar o banco de dados MongoDB
const mongoose = restful.mongoose

/**
* Curso:
* -> código: String
* -> Nomes: String
* -> Observações: String
*/

const CursoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  obs: { type: String, required: true },
})

//Exporta a model para uso da API
module.exports = restful.model('Curso', CursoSchema)
