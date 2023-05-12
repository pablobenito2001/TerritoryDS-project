<template>
    <main class="TaskView">
        <div class="TaskView-data">
            <h3 class="TaskView-dataText"><span class="TaskView-dataNumber">{{ taskStore.getLength }}</span> Salida/s Creada/s</h3>
            <h3 class="TaskView-dataText"><span class="TaskView-dataNumber">{{ territoryStore.getLength }}/62</span> Territorios Disponibles</h3>
        </div>
        <div class="TaskView-container">
            <TaskModule />
        </div>
    </main>
</template>
<script lang='ts' setup>
    //Componentes
    import TaskModule from '../modules/TaskModule.vue';
    //

    //utils
    import { useTaskStore } from '../store/taskStore';
    import { useTerritoryStore } from '../store/territoryStore';
    //

    const taskStore = useTaskStore();
    const territoryStore = useTerritoryStore();
</script>
<styles lang='scss' scoped>
    .TaskView{
        &-data{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &-dataText{
            font-weight: 500;
            font-size: 1.7em;
            @media screen and (max-width: 800px) {
                font-size: 1em;
            }
            @media screen and (max-width: 450px) {
                display: none;
            }
        }
        &-dataNumber{
            font-size: 2.2em;
            color: var(--green);
        }
        &-container{
            padding: 1.5625rem 0 0 0;
        }
    }
</styles>