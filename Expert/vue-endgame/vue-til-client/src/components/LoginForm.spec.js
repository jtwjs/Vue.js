// describe() : 연관된 테스트 케이스를 그룹화하는 API
// test() : 하나의 테스트 케이스를 검증하는 API
// expect(결과값).toBe(기대값) : 결과값과 기대값을 검증하는 API
// 테스트 코드가 잘 작성되었는지 확인하려면  반대케이스도 검사

import { shallowMount } from '@vue/test-utils';
import { loginUser } from '../api/auth';
import LoginForm from './LoginForm';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅되면 username이 존재하고 초기값으로 설정되어 있어야함', () => {
    // const instance = new Vue(LoginForm).$mount();
    const wrapper = shallowMount(LoginForm);
    // wrapper.vm === 인스턴스
    expect(wrapper.vm.username).toBe('');
  });
  test('ID는 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    // wrapper.find() : 템플릿 안에있는 특정 HTML 요소를 쫓아갈수있는 API
    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('.btn');
    expect(button.element.disabled).toBeTruthy();
  });
});
