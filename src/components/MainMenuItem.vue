<template>
    <router-link class="router_item" :to="path"> {{ name }}</router-link>
</template>

<script>
export default {
    name: 'MainMenuItem',
    props: {
        name: {
            type: String,
            default: ''
        },
        path: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.router_item {
    text-decoration: none;
    margin-left: 10px;
}

.router_item:hover {
    color: black;
}
</style>