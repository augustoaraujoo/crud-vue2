<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent='handleSubmitForm()'>
          <!-- INÍCIO BLOCO: Employee Name -->
          <div class="form-group">
            <label class="font-weight-bold">Employee Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Type Your Name"
              v-model="employeeForm.name"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.name.$error,
              }"
            />
          </div>
          <div
            v-if="isSubmited && !$v.employeeForm.name.required"
            class="invalid-feedback"
          >
            Employee Name required!
          </div>
          <!-- FIM BLOCO: Employee Name -->

          <!-- INÍCIO BLOCO: Job Role -->
          <div class="form-group">
            <label class="font-weight-bold">Job Role</label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              placeholder="Type Your Job Role"
              v-model="employeeForm.job_role"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.job_role.$error,
              }"
            />
          </div>
          <div
            v-if="isSubmited && !$v.employeeForm.job_role.required"
            class="invalid-feedback"
          >
            job_role Name required!
          </div>
          <!-- FIM BLOCO: Job Role -->

          <!-- INÍCIO BLOCO: Salary -->
          <div class="form-group">
            <label class="font-weight-bold">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              placeholder="Type Your Salary"
              v-model="employeeForm.salary"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.salary.$error,
              }"
            />

          </div>
          <div
            v-if="isSubmited && !$v.employeeForm.salary.required"
            class="invalid-feedback"
          >
            salary Name required!
          </div>
          <!-- FIM BLOCO: Salary -->

          <!-- INÍCIO BLOCO: Birth -->
          <div class="form-group">
            <label class="font-weight-bold">Birth</label>
            <input
              type="date"
              id="birth"
              name="birth"
              class="form-control"
              placeholder="YYYY/MM/DD"
              v-model="employeeForm.birth"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.birth.$error,
              }"
            />
          </div>
          <div
            v-if="isSubmited && !$v.employeeForm.birth.required"
            class="invalid-feedback"
          >
            birth Name required!
          </div>
          <!-- FIM BLOCO: Birth -->

          <!-- INÍCIO BLOCO: Employee Registration -->
          <div class="form-group">
            <label class="font-weight-bold">Employee Registration</label>
            <input
              type="text"
              id="employee_registration"
              name="employee_registration"
              class="form-control"
              placeholder="Employee Registration"
              v-model="employeeForm.employee_registration"
              :class="{
                'is-invalid':
                  isSubmitted && $v.employeeForm.employee_registration.$error,
              }"
            />
          </div>
          <div
            v-if="isSubmited && !$v.employeeForm.employee_registration.required"
            class="invalid-feedback"
          >
            employee_registration Name required!
          </div>
          <!-- FIM BLOCO: Employee Registration -->
          <div class="form-group">
            <button class="btn btn-primary" type="submit">
              Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'CreateEmployeeComponent',
  data() {
    return {
      employeeForm: {
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: '',
      },
      isSubmitted: false,
    };
  },
  validations: {
    employeeForm: {
      name: { required },
      job_role: { required },
      salary: { required },
      birth: { required },
      employee_registration: { required },
    },
  },
  methods: {
    handleSubmitForm() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (this.$v.invalid) {
        return; 
      }
    },
  },
};
</script>