<template>
  <MainMenu />
  <router-view></router-view>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";

export default {
  name: "App",
  components: {
    MainMenu,
  },
  mounted() {
    this.$store.dispatch('restoreUser');
  }
};
</script>
