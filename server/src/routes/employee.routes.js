/*
    *descrição: arquivo responsável pelas rotas da API
*/
const router = require('express').Router();
/* ➡️➡️ const router = require('express-promise-router')();*/
const employeeController = require('../controllers/employee.controller');

// ==> Definindo as rotas do CRUD - 'Employee'

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

// ➡️ rota responsável por listar todos os 'Colaboradores': (GET) localhost:3000/api/employees
router.get('/employees', employeeController.ListAllEmployees);


module.exports = router;
