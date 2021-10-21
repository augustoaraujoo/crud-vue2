const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// ==> Definindo as rotas do CRUD - 'Employee'

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);
// ==> Rota responsável por listar os 'Colaboradores(a)': (GET): localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees);
// ==> Rota responsável por remover um determinado 'Colaboradore(a)' por ID: (DELETE): localhost:3000/api/employees/ID
router.delete('/employees/:id', employeeController.deleteEmployeeById);
module.exports = router;
