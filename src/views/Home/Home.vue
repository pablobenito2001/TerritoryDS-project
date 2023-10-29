<template>
    <MainLayout>
        <Logo />
        <HomeCardLayout>
            <DateCard />
            <PercentCard /> 
            <TableCard />
            <CreateCard @click="() => router.push('/create')"/>
        </HomeCardLayout>
        <PreachModule />
    </MainLayout>
</template>
<script lang='ts' setup>
    import MainLayout from '../../layout/MainLayout.vue';
    import Logo from './components/Logo.vue';
    import HomeCardLayout from './layout/HomeCardLayout.vue';
    import DateCard from './module/DateCard.vue';
    import PercentCard from './module/PercentCard.vue';
    import TableCard from './module/TableCard.vue';
    import CreateCard from './module/CreateCard.vue';
    import PreachModule from './module/PreachModule.vue';
    import router from '../../router/router';
</script>
<style lang='scss' scoped>

</style>