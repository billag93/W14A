<template>
    <div>
        <normal-joke v-if="jokeType == 'normal'"></normal-joke>
        <snake-joke v-else-if="jokeType == 'snake'"></snake-joke>
        <loud-joke v-else-if="jokeType == 'loud'"></loud-joke>
        <options-buttons></options-buttons>
        <joke-button></joke-button>
    </div>
</template>

<script>
import JokeButton from './jokebutton.vue';
import NormalJoke from './normaljoke.vue';
import SnakeJoke from './snakejoke.vue';
import LoudJoke from './loudjoke.vue';
import OptionsButtons from './optionbuttons.vue';
    export default {
        name: "page-body",
        components:{
            NormalJoke,
            SnakeJoke,
            LoudJoke,
            JokeButton,
            OptionsButtons
        },
        computed: {
            jokeType:function() {
                return this.$store.state.jokeType
            }
        },
    }
</script>

<style scoped>

</style>