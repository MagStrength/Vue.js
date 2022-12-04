<template>
    <div>
        <div>About</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum excepturi, atque dignissimos reiciendis
            provident repudiandae cum, maxime eum, obcaecati odio minima rerum accusamus repellat impedit nulla
            reprehenderit beatae molestias. Inventore.
        </p>
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
}
</script>


<style lang="scss">

</style>