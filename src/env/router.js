import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './../pages/Login';
import index from './../pages/index';
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'index',
      path: '*',
      component: index
    }
  ]
});
