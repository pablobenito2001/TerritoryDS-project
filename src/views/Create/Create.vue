<template>
    <div class="Create">
        <Map />
        <FormTaskModule />
    </div>
</template>
<script lang='ts' setup>
    import FormTaskModule from './modules/FormTaskModule.vue';
    import Map from './modules/Map.vue';
</script>
<style lang='scss' scoped>
    .Create{
        display: grid;
        grid-template-columns: 1fr 30%;
        grid-template-rows: 100vh;
        overflow: hidden;
    }
</style>