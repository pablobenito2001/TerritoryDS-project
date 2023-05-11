<template>
    <ListWrapperLayout>
        <TaskListResume
        v-for="(item, index) in store.getTask"
        :key="index"
        :id="index"
        :day="item.date"
        :hour="item.hour"
        :territory="item.territory"
        :captain="item.captain"
        :house="item.house"
        :expiration="item.expirationDate"
        />
    </ListWrapperLayout>
</template>
<script lang='ts' setup>
    import ListWrapperLayout from '../layout/ListWrapperLayout.vue';
    import TaskListResume from '../components/task/TaskListResume.vue';

    import { useTaskStore } from '../store/taskStore';

    const store = useTaskStore();
</script>   
<styles lang='scss' scoped>

</styles>