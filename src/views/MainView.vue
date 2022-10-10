<template>
    <LoginForm v-if="!isUserAuth"/>
    <h1 v-else>You already authorized!</h1>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import { mapState } from 'vuex';

export default {
    name: 'MainView',
    components: {
        LoginForm,
    },
    computed: {
        ...mapState(['isUserAuth'])
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>