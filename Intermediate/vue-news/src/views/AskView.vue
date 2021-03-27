<template>
  <div>
     <p v-for="(item, idx) in fetchedAsk" :key="idx">
      <a :href="item.url">
        {{ item.title }}
      </a>
     <span>{{ item.time_ago }} by {{item.user }} </span>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {

    //#3
    ...mapGetters([
      'fetchedAsk', // store의 getters에 등록되있는 고대로 사용할 경우
    ]),
    // ...mapGetters({
    //   ask: 'fetchedAsk' // stroe의 getters에 등록되있는것을 이름을 바꿔서 사용할 경우
    // }),

    // #2
    // ...mapState({
    //   asks: state => state.asks,
    // })


    // #1
    // asks() {
    //   return this.$store.state.asks;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style>

</style>