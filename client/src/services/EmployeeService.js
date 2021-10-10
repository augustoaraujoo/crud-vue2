/*
* file  : src/services/EmployeeService.js
* data  : 11/10/2021
* horas : 20:26
*  descrição : 'métodos' req http
*/

import Api from './Api';

export default {
    /* 
        * Método responsável por CRIAR um novo(a) 'Employee'
        * (POST) : 'localhost:3080/api/employees'
    */
    async createNewEmployee(employee) {
        try {
            const response = await Api().post('/employees', employee);
            return response.data
        } catch (error) {
            console.log(error);
        }
    },
    /* 
        * Método responsável por listar todos os 'Employees'
        * (GET) : 'localhost:3080/api/employees'
    */
    async getEmployees() {
        try {
            const response = await Api().get('/employees');
            return response.data
        } catch (error) {
            console.log(error);
        }
    },
    /* 
        * Método responsável por listar por ID um determinado 'Employee'
        * (GET) : 'localhost:3080/api/employees/id'
    */
    async getEmployeeId(id) {
        try {
            const response = await Api().get(`/employees/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    /* 
        * Método responsável por atualizar um determinado 'Employee' por ID
        * (PUT) : 'localhost:3080/api/employees/:id'
    */
    async updatedEmployee(id) {
        try {
            const response = await Api().put(`/employees/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    /* 
       * Método responsável por deletar um determinado 'Employee' por ID
       * (DELETE) : 'localhost:3080/api/employees/:id'
   */
    async deleteEmployee(id) {
        try {
            const response = await Api().delete(`/employees/${id}`)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
};