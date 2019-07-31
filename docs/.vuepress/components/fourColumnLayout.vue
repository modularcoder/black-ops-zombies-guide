<template>
    <div class="columns is-multiline is-mobile">
        <div class="column is-half-touch is-half-tablet is-one-quarter-desktop">
            <slot name="column1"></slot>
        </div>
        <div class="column is-half-touch is-half-tablet is-one-quarter-desktop">
            <slot name="column2"></slot>
        </div>
        <div class="column is-half-touch is-half-tablet is-one-quarter-desktop">
            <slot name="column3"></slot>
        </div>
        <div class="column is-half-touch is-half-tablet is-one-quarter-desktop">
            <slot name="column4"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fourColumnLayout"
    }
</script>

<style scoped>

</style>