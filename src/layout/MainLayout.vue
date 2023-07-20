<template>
    <div class="Main">
        <Nav class="Main-content"/>
        <main class="Main-content">
            <slot />
        </main>
    </div>
</template>
<script lang='ts' setup>
    import Nav from '../modules/Nav/Nav.vue';
</script>
<style lang='scss' scoped>
    .Main{
        display: grid;
        grid-template-columns: 20% 1fr;
        grid-template-rows: minmax(100vh, auto);
        background-color: var(--ligth-color);
        &-content{
            padding: 4.375rem 1.875rem;
        }
    }
</style>