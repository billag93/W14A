<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <page-body></page-body>
  </div>
</template>

<script>
import PageBody from './components/body.vue';
export default {
  name: "App",
  components: {
    PageBody,
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
