<template>
    <button class="Button font_l" :class="$attrs.class"><slot /></button>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Button{
        width: 100%;
        background-color: map-get($colors, "secundary-one");
        border-radius: calc(map-get($sizes, "border-radius") -  map-get($sizes, "padding"));
        padding: map-get($sizes, "padding");
        transition: box-shadow 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
        cursor: pointer;
        &:hover{
            box-shadow: 0 0 8px 2px map-get($colors, "secundary-one");
        }
    }
</style>