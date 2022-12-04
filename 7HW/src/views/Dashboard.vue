<template>
    <div class="wrapper">
        <header>My personal costs</header>

        Total:{{ getValue }}
        <main>
            <AddNewPayments />
            <payments-display :items="currentElements" />
            <pagination :cur="page" :n="n" :length="paymentList.length" @changePage="onChangePage" />
            <button @click="openModal">Add new cost +</button>
        </main>
    </div>
</template>


<script>

import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import Pagination from "../components/Pagination.vue";

import AddNewPayments from "./AddNewPayments.vue"

import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
    name: "Dashboard",
    components: { PaymentsDisplay, Pagination, AddNewPayments },

    data() {
        return {
            addFormShow: false,
            settings: {
                content: "AddPaymentForm",
                header: "Add new cost",
            },
            page: 1,
            n: 5,
        };
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
        },
        openModal() {
            this.$modal.show("AddPaymentForm", {
                content: "AddPaymentForm",
                header: "Add new cost",
            });
        },
    },

    created() {
        this.fetchData();
        if (this.$route.params?.page) {
            this.page = Number(this.$route.params.page)
        }
    },
};

</script>


<style lang="scss">

</style>