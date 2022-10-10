<template>
  <form class="login_form" @submit.prevent="submitLoginForm">
    <label for="login">Login</label>
    <Input name="login" className="login_input" v-model="login" />
    <label for="password">Password</label>
    <Input name="password" className="login_input" v-model="password" />
    <Button type="submit" className="login_button" text="Login" />
  </form>
</template>

<script>
import Input from "./UI/Input.vue";
import Button from "./UI/Button.vue";

export default {
  name: "LoginForm",
  components: {
    Input,
    Button,
  },
  computed: {
    login: {
      get() {
        return this.$store.state.login;
      },
      set(event) {
        this.$store.commit("setLogin", event.target.value);
      },
    },
    password: {
      get() {
        return this.$store.state.password;
      },
      set(event) {
        this.$store.commit("setPassword", event.target.value);
      },
    },
  },
  methods: {
    submitLoginForm() {
        this.$store.dispatch('submitUserLogin')
    }
  }
};
</script>

<style scoped>
.login_form {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
}

.login_form * {
  margin-bottom: 10px;
}

.login_input {
  width: 15em;
}

.login_button {
  width: 15em;
}
</style>