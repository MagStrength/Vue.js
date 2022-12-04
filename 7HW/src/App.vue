<template>
  <div id="app">
    <nav>
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/about">About</router-link> |
      <div @click="goToPageNotFound">notfound</div>
    </nav>
    <main>
      <router-view />
    </main>

    <transition name="fade">
      <modal-window :settings="settings" :componentName="componentName" v-if="componentName" />
    </transition>

    <transition name="fade">
      <context-menu />
    </transition>
  </div>
</template>



<script>
import ContextMenu from './components/ContextMenu.vue';
export default {
  components: {
    ModalWindow: () => import("./components/ModalWindow"),
    ContextMenu
  },
  name: "App",

  data() {
    return {
      settings: {},
      componentName: "",
    };
  },

  methods: {
    goToPageNotFound() {
      if (this.$route.name === 'NotFound') return
      this.$router.push({
        name: "NotFound"
      })
    },
    onShow({ name, settings }) {
      this.componentName = name;
      this.settings = settings;
    },
    onHide() {
      (this.settings = {}), (this.componentName = "");
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show");
    this.$modal.EventBus.$off("hide");
  },
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
