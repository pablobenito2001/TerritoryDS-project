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
            <RouterButton to="edit">Ver Más</RouterButton>
        </div>
    </li>       
</template>
<script lang='ts' setup>
    import { computed } from 'vue';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import 'dayjs/locale/es';

    import RouterButton from '../button/RouterButton.vue';

    dayjs.locale('es');
    dayjs.extend(relativeTime);

    const day = computed(() => dayjs(props.day).format("dddd DD-MM"));
    const fromTo = computed(() => dayjs(props.expiration).fromNow())
    
    interface Props{
        day: string;
        house: string;
        expiration: string;
        territory: {nro: number, streets: string[]};
    }
    const props = defineProps<Props>();
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
    }
</styles>