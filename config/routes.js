const express = require('express');

module.exports = function(server) {

  //API Routes
  const router = express.Router();
  server.use('/api', router);
  
  //Todo request a api passará por essa função de callback primeiramente e podemos usar para log do lado do servidor
  router.use(function(req, res, next){
      console.log('Alguém está fazendo requisição a api ;)');
      next();
  });

  //Rota para informar que a api está online
  router.get('/online', function(req, res){
      res.json({message:'O servidor está online =)'});
  });

  //API methods in router:
  
  // Aluno
  const alunoService = require('../api/aluno/alunoService');
  alunoService.register(router, '/aluno');
  
  // Professor
  const professorService = require('../api/professor/professorService');
  professorService.register(router, '/professor');
  
  //Cursos  
  const cursoService = require('../api/curso/cursoService');
  cursoService.register(router, '/curso');

}
