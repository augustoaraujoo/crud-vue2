// @ts-nocheck
/**
 * file: src/components/pages/create-employee/CreateEmployee.js
 * data: 09/11/2020
 * description: arquivo responsável pela lógica do componente
 *  'CreateEmployeeComponent.vue'
 * author: @augustoaraujoo
 */

import axios from 'axios';
import { required } from 'vuelidate/lib/validators';
import EmployeeService from '../../../services/EmployeeService';

export default {
  name: 'CreateEmployeeComponent',
  data() {
    return {
      employeeForm: {
        name: null,
        job_role: null,
        salary: null,
        birth: null,
        employee_registration: null,
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
  mounted() {
    this.view();
  },

  methods: {
    handleSubmitForm() {},
    view() {
      axios.get('https://crudvue2.herokuapp.com/api/employees/').then((response) => {
        console.log(response.data);
      });
    },
    async submitNewEmployee() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Oops!', 'You need to include all the required fields', 'error');
          return;
        }

        await EmployeeService.createNewEmployee(this.employeeForm);
        this.$swal({
          title: 'Employee added successfully!',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        }).then((data) => {
          this.$router.push({
            name: 'list',
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
