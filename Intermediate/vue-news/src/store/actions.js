import {fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem} from '../api/index';

export default {
    FETCH_NEWS({commit}) {
      fetchNewsList()
        .then(({data}) => {
          commit('SET_NEWS', data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    FETCH_JOBS({commit}) {
      fetchJobsList()
        .then(({data}) => {
          commit('SET_JOBS', data);
        })
        .catch(err => {
        console.log(err);
        })
    },
    FETCH_ASK({commit}) {
      fetchAskList()
        .then(({data}) => {
          commit('SET_ASK', data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    FETCH_USER({commit}, name) {
      fetchUserInfo(name)
        .then(({data}) => {
          commit('SET_USER', data);
        })
        .catch(err => {
          console.log(err);
        })
    },
    FETCH_ITEM({commit}, id) {
      fetchItem(id)
        .then(({ data }) => {
          commit('SET_ITEM', data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }