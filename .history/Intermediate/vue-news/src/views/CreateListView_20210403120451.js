import ListView from './ListView';
import bus from '../utils/bus';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    created(){
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}