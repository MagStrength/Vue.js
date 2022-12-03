<template>
  <div class="home">
    <button v-on:click="$modal.show('add')">Добавить + </button>
    <List />
    <div class="pagination">
      <button v-on:click="$store.commit('prevPage')">&#60</button>
      <button v-on:click="$store.commit('nextPage')">&#62</button>
    </div>
    <AddModal />
  </div>
</template>

<script>


import List from '@/components/List.vue';
import AddModal from '@/components/AddModal.vue';


export default {
  name: "HomeView",
  components: { List, AddModal },
}
</script>
