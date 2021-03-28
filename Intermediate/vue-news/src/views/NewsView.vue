<template>
  <ListItem/>
</template>

<script>
import ListItem from '../components/ListItem';

export default {  
  components: {
    ListItem,
  },
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