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
      this.$store.dispatch('FETCH_NEWS')
      .then(() => {
        bus.$emit('end:spinner');
      })
      .catch(err => console.log(err));
    }, 2000);
}
</script>

<style scoped>
 .news-list {
   margin: 0;
   padding: 0;
 }
 .post {
   display: flex;
   align-items: center;
   border-bottom: 1px solid #eee;
   list-style: none;
 }
 .points {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 80px;
   height: 60px;
   color: #42b883;
 }
 .news-title {
   margin: 0;
 }
 .link-text {
   color: #828282;
 }
</style>