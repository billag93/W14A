<template>
    <div>
       <p>{{normalJoke}}</p>
    </div>
</template>

<script>

    export default {
        name: 'normal-joke',
        components:{
         
        },
        computed:{
            normalJoke: function(){
               return this.$store.getters.normalJokes;
            }
        }
    }
</script>

<style scoped>

</style>