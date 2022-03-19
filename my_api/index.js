require('dotenv').config() 
require('./db_/db')
const express = require('express')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
routes(app)

app.listen(port, () => {
   console.log(`Está rodando na porta ${port}`) 
}) 

module.exports = app

