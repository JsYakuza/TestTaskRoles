<template>
  <div class="users_tab">
    <div class="tab_row">
      <span>Id</span>
      <span>Title</span>
      <span>Description</span>
      <span>Author</span>
      <span>Actions</span>
    </div>
    <PostTabItem v-for="post in posts" :key="post.id" :fields="post" />
    <Button className="modal_button" @clickOnButton="showModal" text="Add New Post" />
    <VueFinalModal v-model="isShow">
      <form class="modal_form">
        <label for="title">Title</label>
        <input name="titlee" v-model="title" />
        <label for="description">Description</label>
        <input name="description" v-model="description" />
        <Button @clickOnButton="addNewPost" text="Add" />
      </form>
    </VueFinalModal>
  </div>
</template>

<script>
import PostTabItem from "./PostTabItem.vue";
import Button from './UI/Button.vue';
import { mapState } from "vuex";
import { VueFinalModal } from "vue-final-modal";

export default {
  name: "UsersTab",
  components: {
    PostTabItem,
    VueFinalModal,
    Button
  },
  data() {
    return {
      title: "",
      description: "",
      isShow: false,
    };
  },
  computed: {
    ...mapState(["posts", "userInfo"]),
  },
  methods: {
    showModal() {
      this.isShow = true;
    },
    closeModal() {
      this.isShow = false;
    },
    addNewPost() {
      this.$store.dispatch("addNewPost", {
        title: this.title,
        description: this.description,
        author: this.userInfo.login,
        userId: this.userInfo.id,
      });
      this.closeModal();
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<style scoped>
.users_tab {
  width: 100%;
}

.tab_row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
  background-color: gainsboro;
}
.modal_form {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: #fff;
  border: 1px solid black;
}

.modal_form * {
  margin: 10px;
}

.modal_button {
    position: absolute;
    right: 10px;
}
</style>
