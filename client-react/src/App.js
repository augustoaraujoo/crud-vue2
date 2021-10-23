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
  const [listEmployees, setEmployees] = useState([])

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
  async function getEmployees() {
    const response = await servicesApi.getEmployees();
    console.log(response);
    return setEmployees(response)
  }
  async function deleteEmployee(id) {
    await servicesApi.deleteEmployee(id)
    return servicesApi.getEmployees()
  }
  return (
    <div className="App">
      <header className="App-header" >
        <form className='form_createEmployees'>
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
          <button className='button_createNewEmployee'
          onClick={createNewEmployee}>
            submit
          </button>
        </form>

        <button onClick={getEmployees}>Show Employees</button>
        {listEmployees.map((val, id) => {
          return (
            <div className='container_employees'>
              <p>{val.name}</p>
              <p>{val.job_role}</p>
              <p>{val.salary}</p>
              <p>{val.birth}</p>
              <p>{val.employee_registration}</p>
              <button onClick={deleteEmployee(id)}>delete Employee</button>
            </div>
          )
        })}
        <Router>
          <Link to='/'>/HOME</Link>
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
