<template>
    <div>
        <div class="columns is-multiline is-mobile">
            <div class="column is-half-touch is-half-tablet is-one-third-desktop">
                <slot name="column1"></slot>
            </div>
            <div class="column is-half-touch is-half-tablet is-one-third-desktop">
                <slot name="column2"></slot>
            </div>
            <div class="column is-half-touch is-half-tablet is-one-third-desktop">
                <slot name="column3"></slot>
            </div>
            <div class="column is-half-touch is-half-tablet is-one-third-desktop">
                <slot name="column4"></slot>
            </div>
            <div class="column is-half-touch is-half-tablet is-one-third-desktop">
                <slot name="column5"></slot>
            </div>
            <div class="column is-half-touch is-half-tablet is-one-third-desktop">
                <slot name="column6"></slot>
            </div>
            <div class="column is-half-touch is-half-tablet is-one-third-desktop">
                <slot name="column7"></slot>
            </div>
            <div class="column is-half-touch is-half-tablet is-one-third-desktop">
                <slot name="column8"></slot>
            </div>
            <div class="column is-half-touch is-half-tablet is-one-third-desktop">
                <slot name="column9"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nineColumnLayout"
    }
</script>

<style scoped>

</style>