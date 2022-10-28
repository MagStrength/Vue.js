<template>
  <div id="app">
    <div class="wrapper">
      <!-- :class="[$style.wrapper]" -->
      <header>My personal costs</header>
      <main>
        <add-payment-form @addNewPayment="onDataPaymentAdd" />
        <payments-display :items="paymentsList" />
      </main>
    </div>
  </div>
</template>



<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'


export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      // show: true, //!!!
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        { date: "28.03.2020", category: "Food", value: "169" },
        { date: "24.03.2020", category: "Transport", value: "360" },
        { date: "24.03.2020", category: "Food", value: "532" },
        { date: "21.03.2020", category: "Housing", value: "273" },
        { date: "21.03.2020", category: "Healthcare", value: "545" },
        { date: "16.03.2020", category: "Housing", value: "502" },
        { date: "14.03.2020", category: "Clothing", value: "692" },
        { date: "02.03.2020", category: "Food", value: "143" },
        { date: "01.03.2020", category: "Housing", value: "339" },
        { date: "28.02.2020", category: "Clothing", value: "913" },
      ];
    },
    onDataPaymentAdd(date) {
      this.paymentsList.push(date)
    }
  },

  created() {
    this.paymentsList = this.fetchData()
  },
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

  header {
    font-size: 28px;
  }
}
</style>
