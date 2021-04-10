import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import { store } from '../store/index';

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
      bus.$emit('start:spinner');
      // #1
      this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => { // #5
        bus.$emit('end:spinner');
      })
      .catch(err => console.log(err));
    
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