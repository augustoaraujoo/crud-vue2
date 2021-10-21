/*
    * descrição: arquivo responsável por 
    toda a configuração e execução do Back
*/
const app = require('./src/app')

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('ok', port);
});
//createEmployee error: null value in column "name" of relation "employee" violates not-null constraint
//DATABASE_URL=postgres://postgres:root@localhost:5433/employee-api