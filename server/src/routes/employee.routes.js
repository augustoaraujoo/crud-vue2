/*
    * descrição: arquivo responsável pelas rotas da API
*/
const router = require('express').Router();
/* ➡️➡️ const router = require('express-promise-router')();*/
const employeeController = require('../controllers/employee.controller');

// 😃 Definindo as rotas do CRUD - 'Employee'

// ➡️ Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

// ➡️ rota responsável por listar todos os 'Colaboradores': (GET) localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees);

// ➡️ Rota responsável por listar um determinado 'Colaborador' por ID: (GET): localhost:3000/api/employees/:id
router.get('/employees/:id', employeeController.findEmployeeById)

// ==> Rota reponsável por atualizar um determinado 'Colaborador(a) por Id: (PUT): localhost:3000/api/employees/:id
router.put('/employees/:id', employeeController.updateEmployeeById)

module.exports = router;
