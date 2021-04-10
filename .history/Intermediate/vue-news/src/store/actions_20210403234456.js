import { fetchUserInfo, fetchItem, fetchList } from '../api/index';

export default {
    async FETCH_USER({commit}, name) {
      const response = await fetchUserInfo(name);
      commit('SET_USER', response.data);

      return response;

    },
    async FETCH_ITEM({commit}, id) {
      const response = await fetchItem(id);
      commit('SET_ITEM', response.data);

      return response;
    },
    // // Promise #2  
    // FETCH_LIST({ commit }, pageName){
    //   // #3
    //   return  fetchList(pageName)
    //     .then(res => {
    //       // #4
    //       commit('SET_LIST', res.data)
    //       return res;
    //   })
    //     .catch(err => console.log(err)); 
    // },
    async FETCH_LIST({ commit }, pageName) {//async await
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);

      return response;
    }
  }