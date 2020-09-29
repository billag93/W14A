<template>
    <div>
        <h1 @click="getJoke">Get New Joke</h1>
    </div>
</template>

<script>

    export default {
        name: "joke-button",
       
        methods: {
            getJoke:function() {
                this.$store.dispatch('getJokes')
            }
        },
    }
</script>

<style scoped>

</style>