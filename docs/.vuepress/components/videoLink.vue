<template>
    <span>
        <a @click="isVideoModalActive = true">{{title}}</a>
        <b-modal :active.sync="isVideoModalActive">
                <video controls>
                    <slot></slot>
                </video>
        </b-modal>
    </span>
</template>

<script>
    export default {
        name: "videoLink",
        props: ['title'],
        data() {
            return {
                isVideoModalActive: false,
            }
        },
    }
</script>

<style scoped>

</style>