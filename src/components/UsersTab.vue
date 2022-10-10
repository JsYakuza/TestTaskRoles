<template>
  <div class="users_tab">
    <div class="tab_row">
      <span>Id</span>
      <span>Login</span>
      <span>Role</span>
      <span>Actions</span>
    </div>
    <UsersTabItem v-for="user in users" :key="user.id" :fields="user" />
  </div>
</template>

<script>
import UsersTabItem from "./UserTabsItem.vue";
import { mapState } from "vuex";

export default {
  name: "UsersTab",
  components: {
    UsersTabItem,
  },
  computed: {
    ...mapState(["users"]),
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
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
</style>
