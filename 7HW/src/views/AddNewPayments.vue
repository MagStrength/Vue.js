<template>
    <div class="wrapper">
        <div class="payments">
            <span>Добавить статью затрат:</span>
            <router-link class="new" :to="{
                name: 'AddNewPayments',
                params: { category: 'Food' },
                query: { value: '200' },
            }">Food 200</router-link>

            <router-link class="new" :to="{
                name: 'AddNewPayments',
                params: { category: 'Transport' },
                query: { value: '50' },
            }">Transport 50</router-link>

            <router-link class="new" :to="{
                name: 'AddNewPayments',
                params: { category: 'Sport' },
                query: { value: '2000' },
            }">Sport 2000</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddNewPayments',
};

</script>

<style lang="scss">
.payments {
    width: 600px;
    margin: 20px auto;

}

.new {
    padding-left: 20px;
}
</style>