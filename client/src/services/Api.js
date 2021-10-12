/*
* file  : src/services/Api.js
* data  : 11/10/2021
* horas : 20:24
* descrição : arquivo responsável por inicializar o 'axios'
*/
import axios from 'axios';

export default () => axios.create({
  // base url fara a comunicação do front com o back
  baseURL: 'http://localhost:3080/api',
});
