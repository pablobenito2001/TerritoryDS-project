<template>
    <button class="Button font_l" :class="$attrs.class"><slot /></button>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Button{
        width: 100%;
        border: solid .125rem map-get($colors, "black");
        background-color: map-get($colors, "secundary-one");
        border-radius: .25rem;
        box-shadow: .25rem .25rem  0 0 map-get($colors, "black");
        padding: 15px;
        font-weight: 800;
        transition: filter 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
        cursor: pointer;
        &:hover{
            filter: brightness(120%);
        }
    }
</style>