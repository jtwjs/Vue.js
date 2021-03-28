import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: null,
    item: null,
  },
  getters: {
    fetchedAsk(state) {
      return state.asks;
    },
    fetchedNews(state) {
      return state.news;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations,
  actions
});