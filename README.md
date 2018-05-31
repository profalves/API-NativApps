# API-NativApps

---
Esta é uma REST API que foi construída para o sistema web da [Nativa Apps](https://github.com/profalves/NativApps-Project). Segue abaixo a sua documentação para utilização desta API.

### Ferramentas utilizadas ###

* **[Node.js 6.9.5](http://nodejs.org/en/)**
* **[Express.js 4.15.2](http://expressjs.com/)**
* **[MongoDB 3.4.4](https://www.mongodb.com/)**

### Instalação ###

1. Faça um 'git clone' deste projeto, e execute os comandos abaixo na pasta raíz para instalar as dependencias:
  - git clone https://github.com/profalves/API-NativApps.git
  - cd "pasta_clonada"
  - user@user:~/"caminho_da_pasta_clonada"/api$ **npm install**
  
  **Certifique-se que todas as dependencias foram instaladas, e caso não foram, instale manualmente as dependências que podem não ter sido instaladas pelo comando acima.**

2. Inicie o MongoDB
  - user@user:~/shell$ **mongod**
  
  **O comando acima é para se caso utilize na API um banco de dados MongoDB localmente. Nesta API, já está configurada um banco de dados na nuvem, hospedado na** [MLab](https://mlab.com/welcome/)
  
  Para configurar o banco de dados MongoDB, edite o arquivo config/database.js, na linha 2

3. Inicie a aplicação
  - use@user:~/"caminho_da_pasta_clonada"/api **npm start**
  - Acesse o browser em http://localhost:4000/api/online
  
  **A resposta deverá ser semelhante a esta:** {"message":"O servidor está online =)"} 
  
  ### Porta do localhost: ###
  
  Para modificar a porta onde a API será executado no localhost, edite o arquivo config/server.js, na linha 16.
  
## API Routes ##

### Objetos: ###
  aluno | professor | curso
  
  O exemplo abaixo será feito com o objeto 'aluno' mas o mesmo se aplica aos demais objetos citados acima também


|   Ação                                   | Status           | Metodo   | URL
| -----------------------------------------|------------------|----------|-------------------------------
|   Lista todos os itens do objeto         |       200        |  `GET`   | /api/aluno
|   Mostra um item com o ID especificado   |       200        |  `GET`   | /api/aluno/(id)
|   Cria um novo item                      |       200        |  `POST`  | /api/aluno
|   Edita o item com o ID especificado     |       200        |  `PUT`   | /api/aluno/(id)
|   Deleta o item com o ID especificado    |       200        |  `DELETE`| /api/aluno/(id)

## Criado por ##

* Rodrigo Alves de Oliveira ([Site](http://rodrigoalves.hol.es/), [Github](https://github.com/profalves) e [Linkedin](https://www.linkedin.com/in/rodrigo-alves-47842323/)). igo.sud@hotmail.com

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

>Created By **[Rodrigo Alves](http://rodrigoalves.hol.es/)** 2018.

---
