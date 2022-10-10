<template>
  <ul class="main_menu">
    <MainMenuItem
      v-for="route in userRoutes"
      :key="route.id"
      :name="route.name"
      :path="route.path"
    />
    <a class="log_out" @click="logOut">Log Out</a>
  </ul>
</template>

<script>
import MainMenuItem from "./MainMenuItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainMenu",
  components: {
    MainMenuItem,
  },
  computed: {
    ...mapGetters(["userRoutes"]),
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOutUser");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.main_menu {
  background-color: #e5e4e2;
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}
.log_out {
  position: absolute;
  right: 10px;
  text-decoration: none;
  list-style-type: none;
}
</style>

