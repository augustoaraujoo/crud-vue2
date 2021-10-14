/*
    *descrição: arquivo responsável pela lógica do CRUD (API - EMPLOYEE)
*/

const db = require("../config/database");

// ==> Método responsável por criar um novo 'Employee':
exports.createEmployee = async (req, res) => {
    const { name, job_role, salary, birth, employee_registration } = req.body;
    console.log(req.body);

    try {
        const { rows } = await db.query(
            "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
            [name, job_role, salary, birth, employee_registration]
        );

        res.status(201).send({
            message: "Employee added successfully!",
            body: {
                employee: { name, job_role, salary, birth, employee_registration },
            },
        });
    } catch (error) {
        console.error('createEmployee', error);
        res.status(500).send({
            message: "Ocorreu um erro."
        });
    }
};

// ➡️ Método responsável por listar todos os 'Employess':

exports.listAllEmployees = async (req, res) => {
    try {
        const response = await db.query('SELECT * FROM employee ORDER by name ASC');
        res.status(200).send(response.rows);
    } catch (error) {
        console.log('listAllEmployees', error);
        res.send(500).send({ message: 'Ocorreu um erro !' })
    }
}

// ➡️ Método responsável por listar um determinado colaborador por ID:

exports.findEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await db.query('SELECT * FROM employee WHERE employee_id = $1', [id]);
        res.status(200).send(response.rows);
    } catch (error) {
        console.log('findEmployeeById', error);
        res.status(500).send({ message: 'erro' })
    }
}

// ➡️ Método responsável por atualizar um determinado 'Employee' por ID:
exports.updateEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const { name, job_role, salary, birth, employee_registration } = req.body;
        const { rows } = await db.query(`UPDATE employee 
                                      SET name = $1, 
                                      job_role = $2, 
                                      salary = $3, 
                                      birth = $4, 
                                      employee_registration = $5 
                                      WHERE employee_id = $6`,
            [name, job_role, salary, birth, employee_registration, id]
        );
        res.status(200).send({ message: "Employee Updated Successfully!" });
    } catch (error) {
        console.error('updateEmployeeById', error);
        res.status(500).send({
            message: "Ocorreu um erro."
        });
    }
};

// ➡️ método responsável por deletar um 'Employee' por ID:
exports.deleteEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {

        // const response = db.query("DELETE FROM employee WHERE employee_id = $1", [id]);
        await db.query("DELETE FROM employee WHERE employee_id = $1", [id]);
        res.status(200).send({ message: 'Employee deleted Successfully!' });

    } catch (error) {
        console.error('deleteEmployeeById', error);
        res.status(500).send({
            message: 'Ocorreu um erro.'
        });
    }
}