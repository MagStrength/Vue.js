<template>

    <div class="wrapper">
        <div class="header">{{ settings.header }}</div>
        <div class="content">
            <component :is="componentName" :contextIdElem="settings.contextIdElem" />
        </div>
        <div class="footer">
            <button @click="onclickClose">Close</button>
        </div>
    </div>
</template> 

<script>


export default {
    name: 'ModalWindow',
    props: {
        componentName: String,
        settings: Object,
    },
    components: {
        AddPaymentForm: () => import('./AddPaymentForm.vue'),
        AuthForm: () => import('./AuthForm.vue'),
        EditForm: () => import(/* webpackChunkName: 'EditFormForm' */'./EditForm.vue')
    },
    methods: {
        onclickClose() {
            this.$modal.hide();
        },
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    width: 600px;
    height: 300px;
    background: #ffffffd9;
    margin: 0 auto;
}

.header {
    padding: 20px 0;
}

.content {
    position: relative;
    z-index: 200;
    padding: auto;
}

.footer {
    position: relative;
    z-index: 100;
}

.close-btn {
    position: absolute;
    bottom: 220px;
    right: 15px;
    scale: 2.5;
    z-index: 101;
    background: none;
    border: none;
}
</style>