<template>
    <MainLayout>
        <Header />
        <CardGroup />
        <hr>
        <LayoutTask>
            <span v-if="store.getService.value.length === 0">No hay salidas.</span>
            <template v-else>
                <Task v-for="service in store.getService.value"
                :key="service.id"
                :id="service.id"
                :captain="service.captain"
                :date="service.date"
                :house="service.house"
                :hour="service.hour"
                :territory="service.territory"/>
            </template>
        </LayoutTask>
    </MainLayout>
</template>
<script lang='ts' setup>
    import MainLayout from '../../layout/MainLayout.vue';
    import Header from './components/Header.vue';
    import CardGroup from './components/CardGroup.vue';
    import LayoutTask from './layout/LayoutTask.vue';
    import Task from './components/Task.vue';
    import { useServiceStore } from '../../store/taskStore';
    import { storeToRefs } from 'pinia';

    const service = useServiceStore();
    const store = storeToRefs(service);
</script>
<style lang='scss' scoped>
</style>