<template>
    <li class="Task">
        <div class="Task-infoBox">
            <div class="Task-dot"></div>
            <div class="Task-info">
                <h3 class="Task-title">Salida</h3>
                <span class="Task-text">{{ day }}</span>
            </div>
            <div class="Task-info">
                <h3 class="Task-title">Salida</h3>
                <span class="Task-text">{{ props.house }}</span>
            </div>
            <div class="Task-info">
                <h3 class="Task-title">Territorio</h3>
                <span class="Task-text">Nro: {{ props.territory.nro }}</span>
            </div>
            <div class="Task-info">
                <h3 class="Task-title">Vence</h3>
                <span class="Task-text">{{ fromTo }}</span>
            </div>
        </div>
        <div>
            <button class="Task-button" @click="emitValue">Eliminar</button>
        </div>
    </li>       
</template>
<script lang='ts' setup>
    import { computed } from 'vue';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import 'dayjs/locale/es';

    dayjs.locale('es');
    dayjs.extend(relativeTime);

    const day = computed(() => dayjs(props.day).format("dddd DD-MM"));
    const fromTo = computed(() => dayjs(props.expiration).fromNow())
    
    interface Props{
        day: string;
        house: string;
        expiration: string;
        territory: {nro: number, streets: string[]};
        id: number;
    }
    const props = defineProps<Props>();

    const emit = defineEmits<{
    (e: 'index', terr: number): void
    }>();

    function emitValue(e: Event){
        emit('index', props.territory.nro)
    }
</script>
<styles lang='scss' scoped>
    .Task{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: .625rem;
        line-height: normal;
        background-color: var(--dark-red);
        border-radius: .5rem;
        @media screen and (max-width: 650px) {
            align-items: flex-start;
            flex-direction: column;
            gap: .9375rem;
        }
        &-dot{
            position: relative;
            align-self: flex-start;
            &::after{
                content: "";
                position: absolute;
                width: .625rem;
                height: .625rem;
                background-color: var(--green);
                border-radius: 100%;
                top: 0;
            }
            @media screen and (max-width: 650px) {
                display: none;
            }
        }
        &-infoBox{
            display: flex;
            align-items: center;
            gap: 1.25rem;
            @media screen and (max-width: 650px) {
                display: grid;  
                grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
                grid-auto-rows: auto;
                width: 100%;
                gap: 20px;
            }
        }
        &-title{
            font-size: 1.875em;
        }
        &-text{
            font-family: var(--font-secundary);
            color: var(--alpha-white);
            font-size: 1em;
            text-transform: capitalize;
        }
        &-button{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .625rem 2.1875rem;
            font-size: 1.25em;
            color: var(--white);
            border: solid 2px var(--white);
            border-radius: 6.25rem;
            cursor: pointer;
            transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                background-color: var(--white);
                color: var(--black);
            }
            @media screen and (max-width: 800px) {
                padding: .625rem 1.25rem ;
                font-size: 1.1em;
            }
        }
    }
</styles>