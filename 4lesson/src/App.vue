<template>
  <div id="app">
    <div class="wrapper">
      <!-- :class="[$style.wrapper]" -->
      <header>My personal costs</header>
      Total:{{ getValue }}
      <main>
        <add-payment-form />
        <payments-display :items="currentElements" />
        <pagination :cur="page" :n="n" :length="12" @changePage="onChangePage" />
      </main>
    </div>
  </div>
</template>



<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import Pagination from "./components/Pagination.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";


export default {
  name: 'App',
  components: { PaymentsDisplay, AddPaymentForm, Pagination },
  data() {
    return {
      show: true,
      page: 1,
      n: 3,
    };
  },


  computed: {
    ...mapGetters({
      paymentList: 'getPaymentList',
      getValue: 'getFullPaymentValue',
    }),
    // total() {
    //   return this.$store.getters.getFullPaymentValue;
    // },
    currentElements() {
      // const { n, page } = this;
      return this.paymentList.slice(this.n * (this.page - 1), this.n * (this.page - 1) + this.n);
    },
  },


  methods: {
    ...mapMutations({ fetch: 'setPaymentsListData' }),
    ...mapActions(['addPaymentListData', 'fetchData']),

    onChangePage(p) {
      this.page = p;
      this.fetchData(p);
    },
  },

  created() {
    this.fetchData(1);
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
  margin-top: 60px;

  header {
    font-size: 28px;
  }
}
</style>
