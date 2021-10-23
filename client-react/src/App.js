import './App.css';
import { useState } from 'react'
import servicesApi from './services/servicesApi';
//Rotas
/*

  <Router>
    ** A rota '/' somente quando acessada[exact] irá mostrar minha view Page1
    <Route path='/' exact component={Page1} />
  <Router/>
*/
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
function App() {
  const [name, setName] = useState("");
  const [job_role, setJob_role] = useState("");
  const [salary, setSalary] = useState(0);
  const [birth, setBirth] = useState(0);
  const [employee_registration, setEmployee_registration] = useState(0);
  async function createNewEmployee() {
    const response = await servicesApi.createNewEmployee({
      name,
      job_role,
      salary,
      birth,
      employee_registration
    })
    return response
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input
            type="text"
            placeholder='setName'
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
          /> <input
            type="text"
            placeholder='setJob_role'
            required
            onChange={(event) => {
              setJob_role(event.target.value);
            }}
          /> <input
            type="text"
            placeholder='setSalary'
            required
            onChange={(event) => {
              setSalary(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder='setEmployee_Regis'
            required
            onChange={(event) => {
              setEmployee_registration(event.target.value);
            }}
          /> <input
            type="date"
            placeholder='setbirth'
            required
            onChange={(event) => {
              setBirth(event.target.value);
            }}
          />
          <button onClick={createNewEmployee}></button>
        </form>
        <Router>
          <Link to='/'>/HOME</Link>
          <div></div>
          <Link to='/listEmployees'>List</Link>
          <Switch>
            <Route path='/' exact component={Page1} />
            <Route path='/listEmployees:id' component={Page2} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
