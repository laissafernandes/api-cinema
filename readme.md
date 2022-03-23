
<center><img src="https://img.icons8.com/bubbles/50/000000/star.png"/> </center>
<h1> Projeto responsável por desenvolver uma API Rest em Node.js utilizando o framework EXPRESS </h1>

<img src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"/> <center><h2>O projeto:</h2>

<p> O projeto de final do módulo 4 pela Resilia Educação. O projeto foi desenvolvido foi capaz de realizar uma aplicação que é capaz de gerenciar a lista de atores e atrizes dos filmes presentes no catálogo de um cinema local, porém a aplicação pode ser desenvolvida para outro tipo de serviço. 
Dessa forma, utilizou-se o banco de dados relacional (SQLite3), Api to tipo Rest e toda a organização foi baseada no conceito MVC.</p>

<img src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"/> <center><h2>Ferramentas utilizadas:</h2>

<p> Foi utilizada a linguagem JavaScript com Node.js, a utilização do sequelize, além de todo o framework Express e o banco relacional SQLite3.

<img src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"/> <center><h2>Dependências utilizadas:</h2>

```js
"dependencies": {
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "path": "^0.12.7",
    "sequelize": "^6.17.0",
    "sequelize-cli": "^6.4.1",
    "sqlite3": "^5.0.2",
    "url": "^0.11.0"
}
```

❤ As dependências podem ser encontradas -><a href="">aqui</a><-

<img src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"/> <center><h2>As dependências do desenvolvimento:</h2>

```js
"devDependencies": {
    "nodemon": "^2.0.15"
}
```
❤ Caso deseje instalar o nodemon em suas dependências para o ambiente de aplicação, basta copiar o comando abaixo e utilzar em seu terminal, após o comando das dependências obrigatórias.
```js
npm install --save-dev nodemon
```
<img src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"/> <center><h2>Comando para iniciar o terminal:</h2>

```js
npm run dev
```

❤ Configuração dos scripts utilizados no terminal encontra-se abaixo. Vale destacar que os comandos encontram-se no documento package.json: </p>

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon ./my_api/index.js",
    "migrate": "npx sequelize-cli db:migrate",
    "seed": "npx sequelize-cli db:seed:all",
    "start": "node ./my_api/index.js"
}
```
❤  Vale ressaltar que foi utilizada a versão v16.14.0. do Node.js, dessa forma para realizar a instalação é necessário verificar uma versão igual ou superior a informada acima.


<img src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"/> <center><h2>As rotas da API:</h2>

Inicialmente há apenas a rota <b>"/atores"</b>. Com a utilização do CRUD temos:

```js

router.get('/atores', AtoresController.pegaTodosOsAtores) - // visualizar as infom. dos atores
router.get('/atores/:id', AtoresController.pegaUmAtor)
router.post('/atores', AtoresController.criaAtor)
router.put('/atores/:id', AtoresController.atualizaAtor)
router.delete('/autores/:id', AtoresController.apagaAtor)

```

❤ Caso você apague o arquivo do banco de dados, bata rodar o comando abaixo para criar outro banco de dados novamente. 
<br>
❤ Atente-se que o arquivo não pode ficar vazio, a fim de evitar erros em sua aplicação. 

```js

npx sequelize-cli db:migrate
```

Feito com 💛 por &copy;LaíssaFernandes - T10 - Resilia Educação