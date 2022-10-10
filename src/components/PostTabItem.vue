<template>
  <div class="tab_row">
    <span class="tab_row_item">{{ fields.id }}</span>
    <span class="tab_row_item">{{ fields.title }}</span>
    <span class="tab_row_item">{{ fields.description }}</span>
    <span class="tab_row_item">{{ fields.author }}</span>
    <Button @clickOnButton="showModal" text="Change" />
     <VueFinalModal v-model="isShow">
      <form class="modal_form">
        <label for="title">Title</label>
        <input name="titlee" v-model="title" />
        <label for="description">Description</label>
        <input name="description" v-model="description" />
        <Button @clickOnButton="changePost" text="Change" />
      </form>
    </VueFinalModal>
  </div>
</template>

<script>
import Button from "./UI/Button.vue";
import { VueFinalModal } from "vue-final-modal";
import { mapState } from 'vuex';

export default {
  name: "TabItem",
  components: {
    Button,
    VueFinalModal,
  },
  props: {
    fields: [Object, Array],
  },
  data() {
    return {
      isShow: false,
      title: "",
      description: "",
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    showModal() {
      this.isShow = true;
    },
    closeModal() {
      this.isShow = false;
    },
    changePost() {
      this.$store.dispatch("changePost",  {
        title: this.title,
        description: this.description,
        author: this.fields.author,
        userId: this.userInfo.id,
        oldTitle: this.fields.title,
      });
      this.closeModal();
    },
  },
};
</script>

<style scoped>
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
</style>