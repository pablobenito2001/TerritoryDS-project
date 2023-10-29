<template>
    <div class="HomeCardLayout">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .HomeCardLayout{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 14.375rem;
        gap: map-get($sizes, "gap");
    }
</style>