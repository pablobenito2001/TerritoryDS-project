<template>
    <main class="Main">
        <slot />
    </main>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Main{
        display: flex;
        flex-direction: column;
        gap: map-get($sizes, "padding");
        max-width: 64rem;
        margin: auto;
        min-height: 100vh;
        padding: .9375rem;
    }
</style>