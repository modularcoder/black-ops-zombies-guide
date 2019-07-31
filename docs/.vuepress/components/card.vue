<template>
    <div class="card" >
        <header v-if="header" class="card-header">
            <p class="card-header-title">
                <slot name="header"></slot>
            </p>
        </header>
        <div v-if="image" class="card-image">
            <figure class="image">
                <slot name="image"></slot>
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <slot></slot>
            </div>
        </div>
        <footer v-if="footer" class="card-footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "card",
        props:{
            'header':Boolean,
            'footer':Boolean,
            'image':Boolean
        },
    }
</script>

<style scoped>
    .card-image{
        padding: 16px;
    }
</style>