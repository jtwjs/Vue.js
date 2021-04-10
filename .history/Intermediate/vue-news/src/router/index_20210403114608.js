import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
     // path: url 주소
     path: '/news',
     name: 'news',
     // component: url 주소로 갔을 때 표시 될 컴포넌트 
     component: createListView('NewsView'),
     beforeEnter: (to, from, next) => {
       console.log('to', to);
       console.log('from', from);
       console.log(next);

     }
    },
     {
     path: '/ask',
     name: 'ask',
     component: createListView('AskView'),
    },
     {
     path: '/jobs',
     name: 'jobs',
     component: createListView('JobsView'),
    },
    {
     path: '/user/:id',
     component: UserView, 
    },
    {
     path: '/item/:id',
     component: ItemView,
    },
  ]
});