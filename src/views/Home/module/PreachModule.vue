<template>
    <div class="Grey-font font_m">Salidas Creadas:</div>
    <PreachCardLayout>
        <PreachCard
        v-for="(item, index) in store.getTask"
        :id="index + 1"
        :territorys="item.territory"
        :from="item.house"
        :day="item.date"
        :expiration="item.expirationDate"
        :hour="item.hour"
        />
    </PreachCardLayout>
</template>
<script lang='ts' setup>
    import PreachCardLayout from '../layout/PreachCardLayout.vue';
    import PreachCard from '../components/PreachCard.vue';
    import { storeToRefs } from 'pinia';

    import { useTaskStore } from '../../../store/taskStore';

    const store = useTaskStore();
</script>
<style lang='scss' scoped>

</style>