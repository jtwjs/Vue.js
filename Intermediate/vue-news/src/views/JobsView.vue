<template>
<div>
  <p v-for="(item, idx) in fetchedJobs" :key="idx">
      <a :href="item.url">
        {{ item.title }}
      </a>
     <span>{{ item.time_ago }} by {{item.user }} </span>
    </p>
</div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>