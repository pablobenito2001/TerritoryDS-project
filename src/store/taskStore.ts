import { defineStore } from 'pinia';
import { computed, Ref, ref, watch } from 'vue';
import { LocalStorage } from '../services/LocalStorage';
import type TaskTerritory from '../interfaces/TaskTerritory';
import type Group from '../interfaces/Group';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrBefore);

export const useTaskStore = defineStore('task', () => {
    //*states
    const tasks = ref<TaskTerritory[]>(LocalStorage.getData('territoryTask'));
    deleteExpiredTask();

    //*getters
    //?get tasks
    const getTask = computed<TaskTerritory[]>((): TaskTerritory[] => {
        let sort: TaskTerritory[] = [...tasks.value];
        
        //?sorted the dates
        return sort.sort((a, b) => dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1)
    });

    //?get length
    const getLength = computed<number>(() => tasks.value.length);

    //?get group
    const getGroup = computed<Group[]>(() => {
        let res: Group[] = [];
        const a: TaskTerritory[] = [...tasks.value]

        a.sort((a, b) => dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1)
        a.forEach(elem => {
            const { date } = elem;
            const index = res.findIndex(index => index.groupName === date)
            index === -1 
            ? res.push({groupName: date, items: [elem]}) 
            : res[index].items = [...res[index].items, elem]; 
        })
        res.forEach(elem => {
            elem.items.sort((a, b) => {      
                const dateA = `${ dayjs(a.date).format('YYYY-DD-MM').toString() } ${ a.hour }`;    
                const dateB = `${ dayjs(b.date).format('YYYY-DD-MM').toString() } ${ b.hour }`
                return dayjs(dateA).isAfter(dayjs(dateB)) 
                ? 1 
                : -1
            });
        })

        return res;
    }) 

    //*actions
    function deleteTask(index: number): void{
        tasks.value.splice(index, 1);
    }

    function addTask(task: TaskTerritory): void{  
        tasks.value.push(task);
    }
    
    function deleteExpiredTask(): void{
        for (let i = 0; i < tasks.value.length; i++) {
            if(!dayjs().isSameOrBefore(tasks.value[i].expirationDate)){
                tasks.value.splice(i, 1);
            }
        }
    }

    //*watcher
    watch(() => tasks.value, 
    () => {
        LocalStorage.putData<TaskTerritory[]>(tasks.value, 'territoryTask');
        deleteExpiredTask();
    },
    {
        deep: true
    })

    return { tasks, getTask, getLength, getGroup, deleteTask, addTask }
})