<template>
    <div class="Main">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Main{
        display: grid;
        align-content: flex-start;
        gap: map-get($sizes, "gap");
        max-width: 64rem;
        margin: auto;
        min-height: 100vh;
        padding: map-get($sizes, "padding");
    }
</style>