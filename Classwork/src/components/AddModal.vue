<template>
    <transition name="fade">
        <div v-if="isShown" class="modal">
            <div class="modal__body">OK</div>
            <button class="close-btn" v-on:click="$modal.hide('add')">&#215</button>
        </div>
    </transition>
</template>



<script>
export default {
    name: 'AddModal',
    data: () => ({
        isShown: false,
        id: 'add'
    }),
    methods: {
        show(id) {
            if (id == this.id) {
                this.isShown = true
            }
        },
        hide(id) {
            if (id == this.id) {
                this.isShown = false
            }
        }
    },
    mounted() {
        this.$modal.EventBus.$on('modalShow', this.show)
        this.$modal.EventBus.$on('modalHide', this.hide)
    }
}
</script>



<style lang="scss">
.modal {
    width: 700px;
    padding: 30px;
    background-color: #fff;
    border: 1px solid #ccc;
    position: absolute;
    top: 200px;
    left: calc(50% - 350px);
    box-shadow: 0 0 60px gray;
}

.close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave {
    opacity: 1;
}
</style>