<template>
    <span>
        <a @click="isImageModalActive = true">{{title}}</a>
        <b-modal :active.sync="isImageModalActive">
            <slot></slot>
        </b-modal>
    </span>
</template>

<script>
    export default {
        name: "imageLink",
        props: ['title'],
        data() {
            return {
                isImageModalActive: false,
            }
        },
    }
</script>

<style scoped>

</style>