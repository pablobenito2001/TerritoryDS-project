<template>
    <ListWrapperLayout>
        <div v-if="store.getLength === 0" class="Task-noTask">
            <span>No hay salidas creadas</span>
        </div>
        <template v-else>
            <Task 
            v-for="(item, index) in store.getTask"
            :key="index"
            :day="item.date"
            :house="item.house"
            :expiration="item.expirationDate"
            :territory="item.territory"
            :id="index"
            @index="(id) => log(id)"
            />
        </template>
    </ListWrapperLayout>
</template>
<script lang='ts' setup>
    import ListWrapperLayout from '../layout/ListWrapperLayout.vue';
    import Task from '../components/task/Task.vue';
    
    import 'dayjs/locale/es';
    import { useTaskStore } from '../store/taskStore';
    import { storeToRefs } from 'pinia';

    const store = useTaskStore();
    
    function log(e: number){
        store.deleteTask(e);
    }
</script>
<styles lang='scss' scoped>
    .Task-noTask{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</styles>