<template>
    <div class="PreachLayout">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .PreachLayout{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 9.375rem;
        gap: map-get($sizes, "gap");
    }
</style>