/*
* file : assets/icons.js
* date : 11/10/2021
*/
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserEdit, faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserEdit, faUserPlus, faTrash);
Vue.component('font-awesome-icon', FontAwesomeIcon);
