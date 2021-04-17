<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading" />
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        />
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { fetchPosts } from '@/api/index';

export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const {
        data: { posts },
      } = await fetchPosts();
      console.log(posts);
      this.isLoading = false;

      this.postItems = posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
