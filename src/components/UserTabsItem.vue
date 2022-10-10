<template>
  <div class="tab_row">
    <span class="tab_row_item">{{ fields.id }}</span>
    <span class="tab_row_item">{{ fields.login }}</span>
    <span class="tab_row_item">{{ fields.role }}</span>
    <Button @clickOnButton="showModal" text="Change" />
    <VueFinalModal v-model="isShow">
      <form class="modal_form">
        <label for="role">New User Role</label>
        <input name="role" v-model="role" />
        <Button @clickOnButton="changeUserRole" text="Change" />
      </form>
    </VueFinalModal>
  </div>
</template>

<script>
import Button from "./UI/Button.vue";
import { VueFinalModal } from "vue-final-modal";

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
      role: "",
    };
  },
  methods: {
    changeUser() {},
    showModal() {
      this.isShow = true;
    },
    closeModal() {
      this.isShow = false;
    },
    changeUserRole() {
      this.$store.dispatch("changeUserRole", {
        login: this.fields.login,
        newRole: this.role,
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
