import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/LoginPage';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/signup',
      component: SignupPage,
    },
  ],
});
