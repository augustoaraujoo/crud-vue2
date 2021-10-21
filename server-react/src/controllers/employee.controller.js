
const db = require("../config/database");

// ==> Método responsável por criar um novo 'Employee':
exports.createEmployee = async (req, res) => {
    const { name, job_role, salary, birth, employee_registration } = req.body;
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

// ==> Método responsável por listar todos os 'Employees':
exports.listAllEmployees = async (req, res) => {
    try {
        const { rows } = await db.query(
            `SELECT 
            employee_id,
            name, 
            job_role, 
            salary, 
            employee_registration, 
            to_char(birth, 'yyyy-MM-dd') as birth 
            FROM employee ORDER BY name asc`
        );
        res.status(200).send(rows);
    } catch (error) {
        console.error('listAllEmployees', error);
        res.status(500).send({
            message: "Ocorreu um erro."
        });
    }
};
