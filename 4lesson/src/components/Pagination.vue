<template>
  <div class="pagination__wrapper">
    <div @click="onClickPage(cur - 1)">&#60</div>
    <div v-for="  page in amount" :key="page" @click="onClickPage(page)" :class="{ active: page === cur }">
      {{ page }}
    </div>
    <div @click="onClickPage(cur + 1)">&#62</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    n: Number,
    cur: Number,
    length: Number,
  },

  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },

  methods: {
    onClickPage(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit('changePage', p);
    },
  },
};
</script>



<style lang="scss" scoped>
.pagination {
  &__wrapper {
    display: flex;
    justify-content: center;

    &>div {
      cursor: pointer;
      padding: 10px;
    }
  }
}

.active {
  background: #a3a1a141;
}
</style>
