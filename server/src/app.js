/*
    * descrição : arquivo responsável 
    por fazer a conexão com o arquivo 'server.js'
*/
const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API (Employee):
const index = require('./routes/index');
const employeeRoute = require('./routes/employee.routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(index);
app.use('/api/', employeeRoute);

module.exports = app;
