<template>
  <ListItem/>
</template>

<script>
import ListItem from '../components/ListItem';
import bus from '../utils/bus';

export default {
  components: {
    ListItem,
  },
  computed: {

    //#3
    // ...mapGetters([
    //   'fetchedAsk', // store의 getters에 등록되있는 고대로 사용할 경우
    // ]),
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
    bus.$emit('start:spinner');

    setTimeout(() => {
      this.$store.dispatch('FETCH_ASK')
      .then(() => {
        bus.$emit('end:spinner');
      })
      .catch(err => console.log(err));
    }, 2000);
  }
}
</script>


