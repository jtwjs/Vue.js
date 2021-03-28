<template>
  <div>
    <section>
      <!-- 사용자 정보 --> 
      <UserProfile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{fetchedItem.user }}
        </router-link>
        <span slot="time">{{`Posted: ${fetchedItem.time}`}}</span>
      </UserProfile>
    </section>
    <section>
      <h2>{{ fetchedItem.title}}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import UserProfile from '../components/UserProfile';


export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters([
      'fetchedItem'
    ])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id);
  }
}
</script>

<style>

</style>