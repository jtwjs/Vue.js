<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, idx) in listItems" :key="idx" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0}}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="`${item.url}`">
                {{ item.title }}
              </a>
             </template>
             <template v-else>
               <router-link :to="`item/${item.id}`">
                {{ item.title }}
               </router-link>
             </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
             <router-link :to="`/user/${item.user}`" v-if="item.user" class="link-text"> 
              {{item.user }} 
             </router-link>   
             <a :href="item.url" v-else>
               {{ item.domain }}
             </a>
          </small>
        </div>
      </li>
    </ul> 
  </div>
  
</template>

<script>

export default {
   computed: {
     listItems() {
       return this.$store.state.list;
     }
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