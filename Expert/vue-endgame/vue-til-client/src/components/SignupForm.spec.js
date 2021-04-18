// 테스트 유틸 라이브러리 로딩
import { shallowMount } from '@vue/test-utils';
// 컴포넌트 로딩
import SignupForm from './SignupForm';

describe('SignupForm', () => {
  test('로그메시지가 잘 작동된다!', async () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'test@test.com',
          password: '1234',
          nickname: '1234',
          logMessage: '123',
        };
      },
    });
    await wrapper.find('form').trigger('submit');
    console.log('아나', wrapper.vm.logMessage);
  });
});
