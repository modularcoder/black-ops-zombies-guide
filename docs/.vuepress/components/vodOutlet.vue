<template>
    <four-column-layout>
        <template #column1>
            <outlet-card title="酸" class="has-background-success"></outlet-card>
        </template>
        <template #column2>
            <outlet-card title="水" class="has-background-info"></outlet-card>
        </template>
        <template #column3>
            <outlet-card title="电" class="has-background-warning"></outlet-card>
        </template>
        <template #column4>
            <outlet-card title="火" class="has-background-danger"></outlet-card>
        </template>
    </four-column-layout>
</template>

<script>
    import FourColumnLayout from "./fourColumnLayout";
    import OutletCard from "./outletCard";
    export default {
        name: "vodOutlet",
        components: {OutletCard, FourColumnLayout}
    }
</script>

<style scoped>

</style>