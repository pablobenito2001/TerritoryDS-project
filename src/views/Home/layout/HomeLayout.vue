<template>
    <div class="HomeLayout">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .HomeLayout{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(21.875rem, 100%), 1fr));
        grid-auto-rows: 21.875rem;
        gap: 3.125rem;
    }
</style>