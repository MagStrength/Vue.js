<template>
    <div class="list">
        <div class="list-item" v-for="item of list" v-bind:key="item.id">
            <p>{{ item.date }}</p>
            <p>{{ item.category }}</p>
            <h5>{{ item.value }}$</h5>
        </div>
    </div>
</template>


<script>
export default {
    name: 'List',
    computed: {
        list() { return this.$store.getters.getList }
    }
}
</script>


<style lang="scss">
.list {
    width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ccc;
    margin-top: 100px;
}

.list-item {
    display: flex;
    justify-content: space-between;
    height: 70px;
    border-bottom: 1px solid #ccc;
}
</style>