<template>
    <HomeLayout>
        <TerritoryCard />
        <ViewCard />
        <CreateCard />
        <MapCard />
    </HomeLayout>
</template>
<script lang='ts' setup>
    import HomeLayout from './layout/HomeLayout.vue';
    import TerritoryCard from './components/TerritoryCard.vue';
    import ViewCard from './components/ViewCard.vue';
    import CreateCard from './components/CreateCard.vue';
    import MapCard from './components/MapCard.vue';
</script>
<style lang='scss' scoped>

</style>