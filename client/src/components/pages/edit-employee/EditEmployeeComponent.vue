<template>
  <div class='container'>
    <div class='card'>
      <div class='card-header'>
        <h3>Update Employee</h3>
      </div>
      <div class='card-body'>
        <form >
          <!--INÍCIO DO BLOCO: Employee Name-->
          <div class='form-group'>
            <label class='font-weight-bold'>Employee Name</label>
            <input type='text' id='name' name='name' class='form-control' />
          </div>
          <!--FIM DO BLOCO: Employee Name-->

          <!--INÍCIO DO BLOCO: Job Role-->
          <div class='form-group'>
            <label class='font-weight-bold'>Job Role</label>
            <input
              type='text'
              id='job_role'
              name='job_role'
              class='form-control'
            />
          </div>
          <!--FIM DO BLOCO: Job Role-->

          <!--INÍCIO DO BLOCO: Salary-->
          <div class='form-group'>
            <label class='font-weight-bold'>Salary</label>
            <input
              type='number'
              id='salary'
              name='salary'
              class='form-control'
            />
          </div>
          <!--FIM DO BLOCO: Job Role-->

          <!--INÍCIO DO BLOCO: Birth-->
          <div class='form-group'>
            <label class='font-weight-bold'>Birth</label>
            <input type='date' id='birth' name='birth' class='form-control' />
          </div>
          <!--FIM DO BLOCO: Birth-->

          <!--INÍCIO DO BLOCO: Employee Registration-->
          <div class='form-group'>
            <label class='font-weight-bold'>Employee Registration</label>
            <input
              type='text'
              id='employee_registration'
              name='employee_registration'
              class='form-control'
            />
          </div>
          <!--FIM DO BLOCO: Birth-->
          <div class='form-group'>
            <button type='submit' class='btn btn-primary'>Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
