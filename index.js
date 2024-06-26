import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/LoginForm.vue'; 

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
