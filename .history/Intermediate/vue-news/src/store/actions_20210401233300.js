import { fetchUserInfo, fetchItem, fetchList } from '../api/index';

export default {
    FETCH_USER({commit}, name) {
      return fetchUserInfo(name)
        .then(({data}) => {
          commit('SET_USER', data);
        })
        .catch(err => {
          console.log(err);
        })
    },
    FETCH_ITEM({commit}, id) {
      return  fetchItem(id)
        .then(({ data }) => {
          commit('SET_ITEM', data);
        })
        .catch(err => {
          console.log(err);
        })
    },
    // #2
    FETCH_LIST({ commit }, pageName){
      // #3
      return  fetchList(pageName)
        .then(res => {
          // #4
          commit('SET_LIST', res.data)
          return res;
      })
        .catch(err => console.log(err)); 
    }
  }