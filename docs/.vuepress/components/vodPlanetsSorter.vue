<template>
    <div>
        <section>
            <b-button type="is-success" @click="clear">重置</b-button>
        </section>
        <div>{{sort}}</div>
        <nine-column-layout >
            <template #column2>
                <plant-card @name="handle" title="水星"></plant-card>
            </template>
            <template #column3>
                <plant-card @name="handle" title="金星"></plant-card>
            </template>
            <template #column4>
                <plant-card @name="handle" title="月球"></plant-card>
            </template>
            <template #column5>
                <plant-card @name="handle" title="火星"></plant-card>
            </template>
            <template #column6>
                <plant-card @name="handle" title="木星"></plant-card>
            </template>
            <template #column7>
                <plant-card @name="handle" title="土星"></plant-card>
            </template>
            <template #column8>
                <plant-card @name="handle" title="海王星"></plant-card>
            </template>
            <template #column1>
                <plant-card @name="handle" title="天王星"></plant-card>
            </template>
            <template #column9>
                <plant-card @name="handle" title="太阳" disabled></plant-card>
            </template>
        </nine-column-layout>
    </div>
</template>

<script>
    import NineColumnLayout from "./nineColumnLayout";
    import PlantCard from "./planetCard";
    export default {
        name: "vodPlanetsSorter",
        components: {PlantCard, NineColumnLayout},
        data() {
            return {
                sort:['太阳'],
            }
        },
        methods:{
            handle:function (event) {
                if (!this.sort.includes(event))
                    this.sort.unshift(event);
            },
            clear:function () {
                this.sort=['太阳']
            }
        }
    }
</script>

<style scoped>

</style>