<template>
    <card header class="has-text-white has-background-grey">
        <template #header >
            <span class="has-text-white  has-text-centered">{{name}}</span>
        </template>
        <div class="is-size-7-touch field">
            <b-switch>符号已找到</b-switch>
        </div>
        <div class="is-size-7-touch field">
            <b-switch>精华已拾取</b-switch>
        </div>
        <section>
            <b-button :disabled="disabled" @click="send">亮起</b-button>
        </section>
    </card>
</template>

<script>
    export default {
        name: "plantCard",
        props:{
            'title':String,
            disabled:Boolean
        },
        methods:{
            send(){
                this.$emit('name',this.name)
            }
        },
        computed:{
            name:function(){
                return this.title
            }
        }
    }
</script>

<style scoped>

</style>