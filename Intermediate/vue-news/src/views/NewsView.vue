<template>
  <div>
    <p v-for="(item, idx) in fetchedNews" :key="idx">
      <a :href="item.url">
        {{ item.title }}
      </a>
     <span>{{ item.time_ago }} by {{item.user }} </span>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created() {
  this.$store.dispatch('FETCH_NEWS');
 }
}
</script>

<style>

</style>