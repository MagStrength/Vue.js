<template>
    <div class="payment-content">
        <button @click="show = !show">ADD NEW COST+</button>
        <div class="add_cost" v-if="show">
            <input placeholder="Category" v-model="category" />
            <input placeholder="Date" v-model="date" />
            <input placeholder="Value" v-model.number="value" type="number" />
            <button @click="onSaveClick">ADD +</button>
        </div>
    </div>
</template>



<script>
export default {
    name: 'AddPaymentForm',
    data() {
        return {
            category: '',
            date: '',
            value: '',
            show: false,
        }
    },

    computed: {
        getCurrentDate() {
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() + 1;
            const y = today.getFullYear();

            return `${d}.${m}.${y}`
        }
    },
    methods: {
        onSaveClick() {
            const data = {
                value: this.value,
                date: this.date || this.getCurrentDate,
                category: this.category
            }
            this.$emit('addNewPayment', data)
        }
    },
}
</script>



<style lang="scss">
.add_cost {
    padding: 20px 0;
    display: grid;
    grid-template-columns: 1fr;
    width: 300px;
    gap: 8px;
    margin: 0 auto;
}

button {
    max-width: 200px;
    margin: 10px 0;
    cursor: pointer;
}
</style>