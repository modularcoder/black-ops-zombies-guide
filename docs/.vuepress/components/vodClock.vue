<template>
    <four-column-layout>
        <template #column1>
            <clock-card title="火元素" class="has-background-danger">
                <img src="./image/fire.svg">
            </clock-card>
        </template>
        <template #column2>
            <clock-card title="水元素" class="has-background-info">
                <img src="./image/water.svg">
            </clock-card>
        </template>
        <template #column3>
            <clock-card title="气元素" class="has-background-link">
                <img src="./image/air.svg">
            </clock-card>
        </template>
        <template #column4>
            <clock-card title="土元素" class="has-background-success">
                <img src="./image/earth.svg">
            </clock-card>
        </template>
    </four-column-layout>
</template>

<script>
    import FourColumnLayout from "./fourColumnLayout";
    export default {
        name: "vodClock",
        components: {FourColumnLayout},
    }
</script>

<style scoped>

</style>