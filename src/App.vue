<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1> {{ msg }}</h1>
    <hr>
    <!--Reloads Page and all the states every time-->
    <!--<a href="/">Home</a>-->
    <router-link to="/">Home</router-link>
    <router-link to="/users/steve">User Steve</router-link>
    <router-link to="/users/tony">User Tony</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  width: 50px
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
