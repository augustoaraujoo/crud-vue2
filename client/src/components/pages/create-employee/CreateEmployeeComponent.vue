<template>
  <div class='container'>
    <div class='card'>
      <div class='card-header'>
        <h3>Add Employee</h3>
      </div>
      <div class='card-body'>
        <form v-on:submit.prevent='handleSubmitForm()'>
          <!-- INÍCIO BLOCO: Employee Name -->
          <div class='form-group'>
            <label class='font-weight-bold'>Employee Name</label>
            <input
              type='text'
              id='name'
              name='name'
              class='form-control'
              placeholder='Type Your Name'
            />
          </div>
          <!-- FIM BLOCO: Employee Name -->

          <!-- INÍCIO BLOCO: Job Role -->
          <div class='form-group'>
            <label class='font-weight-bold'>Job Role</label>
            <input
              type='text'
              id='job_role'
              name='job_role'
              class='form-control'
              placeholder='Type Your Job Role'
            />
          </div>
          <!-- FIM BLOCO: Job Role -->

          <!-- INÍCIO BLOCO: Salary -->
          <div class='form-group'>
            <label class='font-weight-bold'>Salary</label>
            <input
              type='number'
              id='salary'
              name='salary'
              class='form-control'
              placeholder='Type Your Salary'
            />
          </div>
          <!-- FIM BLOCO: Salary -->

          <!-- INÍCIO BLOCO: Birth -->
          <div class='form-group'>
            <label class='font-weight-bold'>Birth</label>
            <input
              type='date'
              id='birth'
              name='birth'
              class='form-control'
              placeholder='YYYY/MM/DD'
            />
          </div>
          <!-- FIM BLOCO: Birth -->

          <!-- INÍCIO BLOCO: Employee Registration -->
          <div class='form-group'>
            <label class='font-weight-bold'>Employee Registration</label>
            <input
              type='text'
              id='employee_registration'
              name='employee_registration'
              class='form-control'
              placeholder='Employee Registration'
            />
          </div>
          <!-- FIM BLOCO: Employee Registration -->
          <div class='form-group'>
            <button @click='submitNewEmployee' class='btn btn-primary'>
              Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>