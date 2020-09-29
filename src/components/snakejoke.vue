<template>
    <div>
        <p>{{snakeJoke}}</p>
    </div>
</template>

<script>

    export default {
        name: 'snake-joke',
        components:{

        },
        computed:{
             snakeJoke: function(){
               return this.$store.getters.snakeJokes;
            }
        }
    }
</script>

<style scoped>

</style>