<template>
    <card image>
        <template #image>
            <slot></slot>
        </template>
        <p class="title has-text-white">{{title}}</p>
        <b-select placeholder="位置">
            <option v-for="option in this.options">
                {{ option }}
            </option>
        </b-select>
        <p></p>
        <b-timepicker placeholder="时间"></b-timepicker>
    </card>
</template>

<script>
    export default {
        name: "clockCard",
        props:['title','color'],
        data() {
            return {
                options:['- 未选择 -','头等舱休息室 (宙斯神像)','三等舱卧铺','舰桥室','厨房','大旋梯','邮件室']
            }
        },
    }
</script>

<style scoped>

</style>