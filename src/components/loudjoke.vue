<template>
    <div>
      <p>{{loudJoke}}</p>
    </div>
</template>

<script>
    export default {
        name: 'loud-joke',
        components:{
            
        },
        computed:{
            loudJoke: function(){
              return  this.$store.getters.loudJokes;
            }
        }
    }
</script>

<style scoped>

</style>