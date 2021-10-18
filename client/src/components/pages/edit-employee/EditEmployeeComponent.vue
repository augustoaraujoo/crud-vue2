<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Update Employee</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent v-for="employees in employee" :key="employees.employee_id">
          <!--INÍCIO DO BLOCO: Employee Name-->
          <div class="form-group">
            <label class="font-weight-bold">Employee Name</label>
            <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            :placeholder="employees.name"
            v-model="employeeForm.name"
            />
          </div>
          <!--FIM DO BLOCO: Employeae Name-->

          <!--INÍCIO DO BLOCO: Job Role-->
          <div class="form-group">
            <label class="font-weight-bold">Job Role</label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              :placeholder="employees.job_role"
              v-model="employeeForm.job_role"
            />
          </div>
          <!--FIM DO BLOCO: Job Role-->

          <!--INÍCIO DO BLOCO: Salary-->
          <div class="form-group">
            <label class="font-weight-bold">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              :placeholder="employees.salary"
              v-model="employeeForm.salary"
            />
          </div>
          <!--FIM DO BLOCO: Job Role-->

          <!--INÍCIO DO BLOCO: Birth-->
          <div class="form-group">
            <label class="font-weight-bold">Birth</label>
            <input
            type="date"
            id="birth"
            name="birth"
            class="form-control"
            v-model="employeeForm.birth"
            />
          </div>
          <!--FIM DO BLOCO: Birth-->

          <!--INÍCIO DO BLOCO: Employee Registration-->
          <div class="form-group" >
            <label class="font-weight-bold">Employee Registration</label>
            <input
              type="text"
              id="employee_registration"
              name="employee_registration"
              class="form-control"
              :placeholder="employees.employee_registration"
              v-model="employeeForm.employee_registration"
            />
          </div>
          <!--FIM DO BLOCO: Birth-->
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary"
              @click="updateEmployee(employee.employee_id)"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

import EmployeeService from '@/services/EmployeeService';

export default {
  name: 'EditEmployeeComponent',
  data() {
    return {
      employee: null,
      employeeForm: {
      },
    };
  },
  mounted() {
    this.listEmployeeById();
  },
  methods: {
    async listEmployeeById() {
      const { id } = this.$route.params;
      const response = await EmployeeService.getEmployeeId(id);
      this.employee = { ...response };
    },
    updateEmployee() {
      console.log(this.employee_id);
    },
  },
};
</script>
