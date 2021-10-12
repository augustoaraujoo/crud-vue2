/*
    * descrição: arquivo responsável por 
    toda a configuração e execução do Back
*/
const app = require('./src/app')

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('ok', port);
})