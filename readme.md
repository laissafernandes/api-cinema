<!-- - falta completar o controllers (não esquecer de importar para as rotas)
- validacao (serviços)
- readme -->

<center><img src="https://img.icons8.com/bubbles/50/000000/star.png"/>
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

* As dependências podem ser encontradas -><a href="">aqui</a><-

<img src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"/> <center><h2>As dependências do desenvolvimento:</h2>

```js
"devDependencies": {
    "nodemon": "^2.0.15"
}
```
* Caso deseje instalar o nodemon em suas dependências para o ambiente de aplicação, basta copiar o comando abaixo e utilzar em seu terminal, após o comando das dependências obrigatórias.
```js
npm install --save-dev nodemon
```
<img src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"/> <center><h2>Comando para iniciar o terminal:</h2>

```js
npm run dev
```

* <p> Configuração dos scripts utilizados no terminal encontra-se abaixo. Vale destacar que os comandos encontram-se no documento package.json: </p>

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon ./my_api/index.js",
    "migrate": "npx sequelize-cli db:migrate",
    "seed": "npx sequelize-cli db:seed:all",
    "start": "node ./my_api/index.js"
}
```
* <p> Vale ressaltar que foi utilizada a versão v16.14.0. do Node.js, dessa forma para realizar a instalação é necessário verificar uma versão igual ou superior a informada acima.<p>

------

<img src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"/> <center><h2>As rotas da API:</h2>

Inicialmente há apenas a rota <b>"/atores"</b>.
<br>

<img src="https://img.icons8.com/color/48/000000/expand-arrow--v1.png"/> <center><h2>Visualizar as informações dos atores:</h2>

Utilizar o GET no caminho <b>/atores</b>
<br>
<br>

### Buscar pedidos por id:

Utilizar o método HTTP Get no caminho <b>"url da api" + /pedidos/id</b>
<br>
<br>

### Adicionar pedidos:
Utilizar o método HTTP Post no caminho <b>"url da api" + /pedidos</b> com todos os dados necessários para o seu banco de dados. Abaijo segue um json de exemplo para corpo da requisição.

```json
{
    "nome": "STRING",
    "sobrenome": "STRING",
    "email": "STRING",
    "data_de_nascimento": "DATEONLY",
    "sexo": "STRING",
    "quantidade_de_aparicoes": "NUMBER"
    }
```
<br>
<br>

### Modificar um pedidos já existente:
Utilizar o método HTTP Patch no caminho <b>"url da api" + /pedidos/:id</b> passando os valores que deseja alterar especificando seus devidos campos. Para isso basta respeitar a sintaxe json novamente passada abaixo no body da requisição.
```json
{
      "ENDERECO_CLIENTE": "STRING",
      "ENDERECO_FORNECEDOR": "STRING",
      "PRECO_FRETE": "DOUBLE",
      "PRAZO_ENTREGA": "INT",
      "ID_PRODUTO": "INT",
      "ID_FORNECEDOR": "INT",
      "PRECO_PRODUTO": "DOUBLE",
    }
```
<br>
<br>

### Deletar um pedidos:
Utilizar o método HTTP Delete no caminho <b>"url da api" + /pedidos/:id</b>.

<br>
<br>

### * OBS: Caso você apague o arquivo do banco de dados sem querer por algum motivo desconhecido, rode o comando abaixo para criar outro novamente, mas atenção, esse novo banco virar vazio, apenas com a linha 1 contendo o exemplo dos tipos de dados aceitos nele.

```node
node ./src/infra/create-database.js
```
