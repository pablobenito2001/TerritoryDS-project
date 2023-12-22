<template>
    <MainLayout>
        <Header />
        <CardGroup />
        <hr>
        <LayoutTask>
            <Task />
        </LayoutTask>
    </MainLayout>
</template>
<script lang='ts' setup>
    import MainLayout from '../../layout/MainLayout.vue';
    import Header from './components/Header.vue';
    import CardGroup from './components/CardGroup.vue';
    import LayoutTask from './layout/LayoutTask.vue';
    import Task from './components/Task.vue';
</script>
<style lang='scss' scoped>

</style>