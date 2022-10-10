<template>
  <div>
    <div class="posts" v-for="post in posts" :key="post.id">
      <div class="title">{{ post.title }}</div>
      <div class="desc">
        {{ post.description }}
      </div>
      <div class="author">Author: {{ post.author }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PostsView",
  computed: {
    ...mapState(["posts"]),
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<style scoped>
.posts {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
}

.posts * {
  margin-top: 10px;
}
</style>