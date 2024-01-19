import { defineStore } from 'pinia';
import { computed, Ref, ref, watch } from 'vue';
import { LocalStorage } from '../services/LocalStorage';
import type Service from '../interfaces/Service';
// import type Group from '../interfaces/Group';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrBefore);

export const useServiceStore = defineStore('service', () => {
    //*states
    const service = ref<Service[]>(LocalStorage.getData('territoryservice'));
    deleteExpiredService();

    //*getters
    //?get service
    const getService = computed<Service[]>((): Service[] => {
        let sort: Service[] = [...service.value];
        
        //?sorted dates
        return sort.sort((a, b) => dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1)
    });

    //?get length
    const getLength = computed<number>(() => service.value.length);

    //?get used territories
    const usedTerritories = computed<number[]>(() => service.value.map((elem: Service) => elem.territory).flat());

    //?get used ids
    const usedIDs = computed<number[]>(() => service.value.map((elem: Service) => elem.id).flat());
    
    //*actions
    function deleteService(id: number){
        const index: number = service.value.findIndex((elem: Service) => elem.id === id);
        service.value.splice(index, 1)
    }
    function addService(s: Service): Promise<void | Error>{  
        const areSame: boolean = usedTerritories.value.some((elem: number) => s.territory.some((e: number) => e === elem))
        return new Promise((resolve, reject) => {
            if(areSame){
                reject(new Error("Los territorios seleccionados ya estan en uso"))
            }else{
                resolve()
                service.value.push(s)   
            }
        })
    }
    function deleteExpiredService(): void{
        for (let i = 0; i < service.value.length; i++) {
            if(!dayjs().isSameOrBefore(service.value[i].expirationDate)){
                service.value.splice(i, 1);
            }
        }
    }

    //*watcher
    watch(() => service.value, 
    () => {
        LocalStorage.putData<Service[]>(service.value, 'territoryservice');
    },
    {
        deep: true
    });

    return { service, getService, getLength, deleteService, addService, usedIDs, usedTerritories }
})