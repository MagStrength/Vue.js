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
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        items: {
            type: Array,
            default: () => [],
        }
    },
};
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