<template>
    <div>
        <button @click="normalJoke">Change to Normal</button>
        <button @click="loudJoke">Change to Loud</button>
        <button @click="snakeJoke">Change to Snake</button>
    </div>
</template>

<script>
    export default {
        name: "options-buttons",
        methods: {
            normalJoke:function(){
                this.$store.commit('changeJoke', 'normal')
            },
            loudJoke:function(){
                this.$store.commit('changeJoke', 'loud')
            },
            snakeJoke:function(){
                this.$store.commit('changeJoke', 'snake')
            }
        },
    }
</script>

<style scoped>

</style>