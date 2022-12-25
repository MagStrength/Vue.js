<template>
    <v-card class="text-left pa-6" elevation="0">
        <v-container class="pa-0">
            <v-row>
                <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition"
                    offset-y max-width="400px" min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field class="pb-4 " v-model="dateFormatted" label="Date" hint="DD/MM/YY" persistent-hint
                            prepend-icon="mdi-calendar pl--6" v-bind="attrs" v-on="on" color="teal"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title @input="menu1 = false" color="teal"></v-date-picker>
                </v-menu>
            </v-row>
        </v-container>
        <v-text-field label="Payment amount" v-model="value" color="teal"></v-text-field>
        <v-select :items="getCategoryList" label="Category" v-model="category" color="teal"></v-select>
        <v-btn class="save_btn" @click="onSave()" color="teal" dark>SAVE <v-icon>mdi-plus</v-icon></v-btn>
    </v-card>
</template>
  
<script>
import { mapMutations } from "vuex";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "AddPaymentForm",
    props: {
        editedElem: Object,
    },

    data: vm => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        menu1: false,
        isDisabled: false,
        category: "",
        value: "",
        new_category: "",

    }),
    computed: {
        ...mapGetters(["getCategoryList"]),
        computedDateFormatted() {
            return this.formatDate(this.date)

        },
    },
    methods: {
        ...mapMutations({
            addCategory: "addNewCategory",
        }),
        ...mapActions(["fetchCategoryList"]),
        addToCategoryList() {
            this.addCategory(this.new_category);
        },
        onSave() {
            if (this.editedElem) {
                const data = {
                    id: this.editedElem.id,
                    category: this.category,
                    value: Number(this.value),
                    date: this.dateFormatted
                };
                // console.log('save_date', this.dateFormatted);
                this.$store.dispatch("upgradeData", data);
                this.$emit("closeAddPayment");
                this.category = "";
                this.value = "";

            } else {
                const data = {
                    id: 0,
                    category: this.category,
                    value: Number(this.value),
                    date: this.dateFormatted || this.formatDate(Date.now()),
                };
                if (data.category !== '' && data.value !== '') {
                    this.$emit("addNewPayment", data);
                }

            }
            this.data = ''
            this.category = "";
            this.value = "";
            this.date = "";
        },
        changeElem() {
            if (this.editedElem) {
                this.isDisabled = false;
                this.category = this.editedElem.category;
                this.value = this.editedElem.value;
                this.date = this.formatToDate(this.editedElem.date);
                this.dateFormatted = this.editedElem.date;

                // this.date = this.formatDate(this.editedElem.date)
                // console.log(this.editedElem.date);
                // console.log(this.formatToDate(this.editedElem.date));
                // console.log(typeof(this.parseDate(this.editedElem.date)))
            } else {
                this.isDisabled = false;
                this.category = "";
                this.value = "";
                this.date = "";
            }
        },
        formatDate(date) {
            if (!date) return null
            const options = {}
            console.log('formatDate')
            console.log(typeof (new Intl.DateTimeFormat('ru-Ru', options).format(new Date(date))))
            return new Intl.DateTimeFormat('ru-Ru', options).format(new Date(date))
        },
        formatToDate(date) {
            if (!date) return null
            const [day, month, year] = date.split('.')
            return `${year}-${month}-${day}`
        },
        strToDate(datestr) {
            if (!datestr) return null
            console.log('strToDate')
            const [day, month, year] = datestr.split('.')
            return new Date(year, month, day)
        },
        parseDate(date) {
            if (!date) return null
            console.log('parse_data')

            const [day, month, year] = date.split('.')
            return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`

        },

    },
    mounted() {
        if (!this.getCategoryList?.length) {
            this.fetchCategoryList();
        }
        this.changeElem();
        if (this.$route.params.category) {
            this.category = this.$route.params.category;
        }
        if (this.$route.query.value) {
            this.value = this.$route.query.value;
        }

    },
    watch: {
        editedElem() {
            this.changeElem();
        },
        date() {
            this.dateFormatted = this.formatDate(this.date)
        },
    },
};
</script>
  
<style lang="scss" scoped>

</style>