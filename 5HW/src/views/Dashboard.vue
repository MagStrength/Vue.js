<template>
    <div class="wrapper">
        <header>My personal costs</header>

        Total:{{ getValue }}
        <main>
            <add-payment-form />
            <payments-display :items="currentElements" />
            <pagination :cur="page" :n="n" :length="paymentList.length" @changePage="onChangePage" />
        </main>
    </div>
</template>


<script>

import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import AddPaymentForm from '../components/AddPaymentForm.vue'
import Pagination from "../components/Pagination.vue";

import AddNewPayments from "./AddNewPayments.vue"
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
    name: "Dashboard",
    components: { PaymentsDisplay, AddPaymentForm, Pagination, AddNewPayments },

    data() {
        return {
            show: true,
            page: 1,
            n: 3,
        }
    },

    computed: {
        ...mapGetters({
            paymentList: 'getPaymentList',
            getValue: 'getFullPaymentValue',
        }),

        currentElements() {
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

        goToAddPaymentPage() {
            this.$router.push({
                name: 'AddNewPayments'
            })
        }
    },

    created() {
        this.fetchData(1);
        if (this.$route.params?.page) {
            this.page = Number(this.$route.params.page)
        }
    },

    // mounted() {
    //     if (this.$route.params?.page) {
    //         this.page = Number(this.$route.params.page)
    //     }
    // }
};

</script>


<style lang="scss">

</style>