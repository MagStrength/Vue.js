<template>
  <div class="home">
    <List />
    <div class="pagination">
      <button v-on:click="$store.commit('prevPage')">&#60</button>
      <button v-on:click="$store.commit('nextPage')">&#62</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import List from '@/components/List.vue';


export default {
  name: "HomeView",
  components: { List }
}
</script>
