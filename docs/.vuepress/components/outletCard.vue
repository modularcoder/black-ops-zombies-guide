<template>
    <card class="has-text-white">
        <p class="title has-text-white">
            {{title}}
        </p>
        <b-field>
            <b-select placeholder="位置">
                <option v-for="option in this.options">
                    {{ option }}
                </option>
            </b-select>
        </b-field>
        <div class="field">
            <b-switch>已激活</b-switch>
        </div>
        <div class="field">
            <b-switch>挑战完成</b-switch>
        </div>
    </card>
</template>

<script>
    export default {
        name: "outletCard",
        props:['title'],
        data() {
            return {
                options:[
                    '- 未选择 -',
                    '头等舱休息室 (宙斯神像)',
                    '三等舱卧铺(白墙区域)',
                    '船尾甲板 (路障窗口)',
                    '餐厅 (拉神像)',
                    '大楼梯顶层',
                    '私人客房 (出生地)'
                ]
            }
        },
    }
</script>

<style scoped>

</style>