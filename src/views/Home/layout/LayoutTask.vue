<template>
    <div class="LayoutTask">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .LayoutTask{
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        gap: map-get($sizes, "gap");
    }
</style>