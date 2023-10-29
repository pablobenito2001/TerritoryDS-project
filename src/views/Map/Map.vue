<template>
    <h2>Mapa</h2>
    <MapLayout>
        <!-- if id doesn't exist, return 0 -->
        <Map v-model:nro="nroTerr"/>
        <!-- reactive option true -->
        <TerrShow :nro="nroTerr"/>
    </MapLayout>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';
    import MapLayout from './layout/MapLayout.vue';
    import Map from '../../components/Map/Map.vue';
    import TerrShow from './modules/TerrShow.vue';

    const nroTerr = ref<number>(0);
</script>
<style lang='scss' scoped>

</style>
