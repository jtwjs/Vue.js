import ListView from './ListView';
import bus from '../utils/bus';
import { store } from '../store/index';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    beforeRouteEnter : (to, from, next) => {
      bus.$emit('start:spinner');
      // #1
        store.dispatch('FETCH_LIST', to.name)
        .then(() => { // #5
          next();
        })
        .catch(err => console.log(err));
     },
     mounted() {
        bus.$emit('end:spinner');
     },
    render(createElement) {
      return createElement(ListView);
    }
  }
}