<template>
    <div>
        <div class="text-h4 text-sm-h2 pa-8 pl-0">ABOUT</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim.</p>
        <button @click="openModal">Open</button>
    </div>
</template>
  
<script>
export default {
    name: "About",
    methods: {
        openModal() {
            this.$modal.show("AuthForm", {
                content: "auth",
                header: "Auth Form",
            });
        },
    },
};
</script>
  
<style>

</style>