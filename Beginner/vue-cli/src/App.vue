<template>
  <div>
    <AppHeader 
      v-bind:propsdata="str"
      v-on:renew="renewStr"></AppHeader>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data: () => {
    /* 컴포넌트는 재사용성이 높음 
     여러개의 컴포넌트에서 동일한 값을 참조하면 안되므로
    (각각의 컴포넌트들이 데이터를 공유하지 않게 하기위해)
    객체가 아닌 함수로 만들어 새 객체를 반환하도록 함*/
      return {
        str: 'Header',
  }
  },
components: {
  AppHeader,
},
methods: {
  renewStr: function() {
    this.str = 'hi';
  }
}
}
</script>

<style>

</style>