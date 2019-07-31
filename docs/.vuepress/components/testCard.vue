<template>
    <card>
        <template #header>
            header
        </template>
        <template #image>
            <img src="./image/air.svg">
        </template>
        <p>content</p>
        <template #footer>
            <a href="#" class="card-footer-item">2222</a>
            <a href="#" class="card-footer-item">Edit</a>
        </template>
    </card>
</template>

<script>
    import Card from "./card";
    export default {
        name: "testCard",
        components: {Card},
    }
</script>

<style scoped>

</style>