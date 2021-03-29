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
  created() {
    bus.$emit('start:spinner');

    setTimeout(() => {
      this.$store.dispatch('FETCH_JOBS')
      .then(() => {
        bus.$emit('end:spinner');
      })
      .catch(err => console.log(err));
    }, 2000);
  }

}
</script>
