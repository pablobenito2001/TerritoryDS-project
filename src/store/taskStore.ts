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
    const tasks = ref<TaskTerritory[]>([]);
    tasks.value = LocalStorage.getData<TaskTerritory>('territoryTask');
    deleteExpiredTask(tasks);

    //*getters
    const getTask = computed<TaskTerritory[]>((): TaskTerritory[] => {
        let sort: TaskTerritory[] = [...tasks.value];

        //?sorted the dates
        sort.sort((a, b) => dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1)

        return sort
    });

    //?get length
    const getLength = computed<number>(() => tasks.value.length);

    const getGroup = computed<Group[]>(() => {
        let res: Group[] = [];

        tasks.value.forEach(elem => {
            const { date } = elem;
            const index = res.findIndex(index => index.groupName === date)
            if(index === -1){
                res.push({groupName: date, items: [elem]})
            }else{
                res[index].items = [...res[index].items, elem]; 
            }
        })

        res.forEach(elem => {
            elem.items.sort((a, b) => !dayjs(a.hour).isAfter(dayjs(b.hour)) ? 1 : -1)
        })

        return res;
    }) 

    //*actions
    function deleteTask(index: number): void{
        tasks.value.splice(index, 1);
    }

    function addTask(task: TaskTerritory): void{  
        tasks.value.push(task)
    }
    
    function deleteExpiredTask(task: Ref<TaskTerritory[]>): void{
        for (let i = 0; i < task.value.length; i++) {
            if(!dayjs().isSameOrBefore(task.value[i].expirationDate)){
                task.value.splice(i, 1);
            }
        }
    }

    //*watcher
    watch(() => tasks.value, () => {
        LocalStorage.putData<TaskTerritory[]>(tasks.value, 'territoryTask');
        deleteExpiredTask(tasks);
    },
    {
        deep: true
    })

    return { tasks, getTask, getLength, getGroup, deleteTask, addTask }
})