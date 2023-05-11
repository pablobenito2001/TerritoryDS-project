import { ref } from "vue";
import API from "../services/API";
import type { Ref } from "vue";

export const useGetLocalData = <T>(to: string) => {
    const dataLocal = ref<T[] | null>(null) as Ref<T[]>;
    const errorLocal = ref<Error | null | string>(null);

    (async function getData() {
        try{
            const res = await API.fetchingLocal<T[]>(to);
            dataLocal.value = res;
        }catch(e){
            console.log(e);
            if (typeof e === "string") {
                errorLocal.value = e.toUpperCase();
            } else if (e instanceof Error) {
                errorLocal.value = e
            }
        }
    })()

    return {
        dataLocal,
        errorLocal
    }
}