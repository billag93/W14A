import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    jokes: [],
    jokeType:"normal"
  },
  mutations: {
     newJoke: function(state, jokeData){
    state.jokes = jokeData},
    changeJoke: function(state, newJokeType){
      state.jokeType = newJokeType;
    }
  },
 
  actions: {
    getJokes: function(context){
      this.state.jokes = "Loading!"
      axios.request({
          url: " https://geek-jokes.sameerkumar.website/api?format=json",
          method: "GET",
          headers:{'Content-Type': "application/JSON"},
          data:{joke: this.state.jokes}
          }).then((response) => {
          console.log(response)
          context.commit('newJoke', response.data.joke)
      }).catch((error) => {
          this.state.jokes = "Error!"
          console.log(error)
      })
  }
  },
  getters: {
    normalJokes:function(state){
      return state.jokes;
    },
    loudJokes:function(state){
      return state.jokes.toUpperCase();
    },
    snakeJokes:function(state){
      return state.jokes.replaceAll(" ", "_");
    }

  }
});
