require('dotenv').config() 
require('./db_/db')
const express = require('express')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
routes(app)

app.listen(port, () => {
   console.log(`Servidor disponível em http://localhost:${port}`) 
}) 

module.exports = app;
