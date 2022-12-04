<template>
    <div class="payments-display">
        <table class='table' cellspacing="0">
            <thead>
                <th>#</th>
                <th>Date</th>
                <th>Category</th>
                <th>Value</th>
            </thead>
            <tbody>
                <tr v-for="(item, idx) in items" :key="idx">
                    <td>{{ idx + 1 }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.value }}</td>
                    <td @click="onClickContextItem($event, item)">&#8942</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default {
    name: 'PaymentsDisplay',
    components: {
    },
    props: {
        items: {
            type: Array,
            default: () => [],
            contextIdElem: Number,
        },
    },

    methods: {
        editItem() {
            this.$modal.show("EditForm", {
                header: "Edit Payment",
                index: this.contextIdElem,
            });

        },
        onClickContextItem(event, item) {
            const items = [
                {
                    text: "Edit",
                    action: () => {
                        this.editItem(item);
                    },
                },
                {
                    text: "Delete",
                    action: () => {
                        this.$store.commit('delItemFromPaymentList', item.id)
                    },
                },
            ];
            this.$context.show({ event, items });
        },
    },
}
</script>

    
<style lang="scss">
.table {
    width: 600px;
    margin-bottom: 20px;
    margin: 0 auto;
}

th {
    text-align: left;
    border-bottom: 2px solid black;
    padding: 10px;
}

td {
    border-bottom: 1px solid grey;
    padding: 8px;
    color: grey;
    text-align: left;
}
</style>