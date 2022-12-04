<template>
    <div class="payment-content">

        <select v-model="category">
            <option v-for="option in options" :key="option" :value="option">
                {{ option }}
            </option>
        </select>

        <div class="addCategory">
            <input type="text" v-model="categoryAdded" placeholder="Add category">
            <button @click="addCategory">Add category</button>
        </div>
        <div class="add_cost">
            <input type="date" placeholder="Date" v-model="date" />
            <input placeholder="Value" v-model.number="value" type="number" />
            <button @click="onSaveClick">ADD +</button>
        </div>
    </div>

</template>


<script>
import { mapActions, mapMutations, mapGetters, } from 'vuex';

export default {
    name: 'AddPaymentForm',
    props: {
        contextIdElem: Number,
    },
    data() {
        return {
            category: '',
            date: '',
            value: '',
            categoryAdded: '',
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
        },
        options() {
            return this.$store.getters.getCategories;
        },
    },

    methods: {
        ...mapMutations(['addPaymentListData']),
        ...mapActions(['fetchCategory']),

        onSaveClick() {
            const data = {
                value: +this.value,
                date: this.date || this.getCurrentDate,
                category: this.category,
                id: this.contextIdElem
            }
            if (this.value !== 0 && this.category !== '') {
                this.$emit('AddNewPayments', data)
                this.addPaymentListData(data)
                // this.$store.dispatch('addPaymentListData', data)
            }
        },

        addCategory() {
            if (!this.categoryAdded) return;
            this.$store.commit('addCategoryToList', this.categoryAdded);
            this.categoryAdded = '';
        },
    },

    mounted() {
        if (!this.getCategories?.length) {
            this.fetchCategory()

            this.category = this.category[0];
            if (this.$route.name === 'AddNewPayments') {
                this.value = Number(this.$route.query?.value) || 0,
                    this.category = this.$route?.params?.category || '',
                    this.show = true,
                    this.onSaveClick();
                this.$router.push({ name: 'Dashboard' })
            }
        }
    }
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