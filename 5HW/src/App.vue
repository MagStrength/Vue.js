<template>
  <div id="app">
    <nav>
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/notfound">NotFound</router-link> -->
      <div @click="goTopageNotFound">notfound</div>
    </nav>
    <router-view />
  </div>
</template>



<script>
export default {
  name: "App",

  data() {
    return {
    };
  },

  methods: {
    goTopageNotFound() {
      if (this.$route.name === 'NotFound') return
      this.$router.push({
        name: "NotFound"
      })
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
