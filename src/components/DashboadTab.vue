<template>
    <p> {{ text }} </p>
</template>
<script>
export default {
    name: 'DashboardTab',
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>

</style>
