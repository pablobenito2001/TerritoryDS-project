import { defineStore, storeToRefs } from "pinia";
import { ref, computed, watch } from 'vue';
import API from "../services/API";
import { useTaskStore } from "./taskStore";
import type Territory from "../interfaces/TaskInterface";

export const useTerritoryStore = defineStore('territory', () => {
    const { tasks } = storeToRefs(useTaskStore());
    const avaliableTask = ref<Territory[]>([]);
    
    const getLength = computed<number>(() => avaliableTask.value.length);
    
    (async function start() {
        avaliableTask.value = await API.fetchingLocal<Territory[]>('territory');
        avaliableTask.value = avaliableTask.value.filter(elem => !tasks.value.some(task => task.territory.nro === elem.nro))
    })()

    function searchAvailableTerritories(){
        avaliableTask.value = avaliableTask.value.filter(elem => !tasks.value.some(task => task.territory.nro === elem.nro))
    }

    watch(() => tasks.value, 
    () => {
        searchAvailableTerritories()
    },
    {
        deep: true
    })
    
    return { avaliableTask, getLength }
})