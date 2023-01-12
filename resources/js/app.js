/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';

import app from './layouts/app.vue';
import router from './router';
/* import "bootstrap/scss/bootstrap.scss";
import "bootstrap"; */

createApp(app).use(router).mount('#app')
