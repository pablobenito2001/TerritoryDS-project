<template>
    <div class="Task">
        <div class="Task-container">
            <div class="Task-date">
                <span class="Task-date-day">{{ date.format('dddd') }}</span>
            <div class="font_xl font_line_100">{{ date.format('DD') }}</div>
            </div>
            <div class="Task-separator"></div>
            <div class="Task-info">
                <div>
                    <span class="font_line_100 secundary-one-font Task-label">Territorios:</span>
                    <div class="font_line_100">{{ props.territory.join('-') }}</div>
                </div>
                <div>
                    <span class="font_line_100 secundary-one-font Task-label">Vencimiento:</span>
                    <div class="font_line_100">2 Dias</div>
                </div>
                <div>
                    <span class="font_line_100 secundary-one-font Task-label">Capitán:</span>
                    <div class="font_line_100">{{ props.captain }}</div>
                </div>
                <div>
                    <span class="font_line_100 secundary-one-font Task-label">Hora de Salida:</span>
                    <div class="font_line_100">{{ props.hour }}</div>
                </div>
                <div>
                    <span class="font_line_100 secundary-one-font Task-label">Lugar de Salida:</span>
                    <div class="font_line_100">{{ props.house }}</div>
                </div>
            </div>
        </div>
        <div class="Task-container Task-button" @click="() => option = !option" @mouseleave="() => option = false">
            <svg width="62" height="65" viewBox="0 0 64 67" fill="none" xmlns="http://www.w3.org/2000/svg" class="Task-option">
                <path d="M29.875 46.1018L12.875 28.3049C11.7 27.0748 11.7 25.0857 12.875 23.8687L15.7 20.9113C16.875 19.6812 18.775 19.6812 19.9375 20.9113L31.9875 33.5262L44.0375 20.9113C45.2125 19.6812 47.1125 19.6812 48.275 20.9113L51.1 23.8687C52.275 25.0988 52.275 27.0879 51.1 28.3049L34.1 46.1018C32.95 47.3318 31.05 47.3318 29.875 46.1018Z" fill="white"/>
            </svg>
            <div class="Task-option-container" v-if="option">
                <div class="Task-option-option" @click="store.deleteService(props.id)">
                    Eliminar
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';
    import dayjs from 'dayjs';
    import 'dayjs/locale/es';
    import localizedFormat from 'dayjs/plugin/localizedFormat';
    import { useServiceStore } from '../../../store/taskStore';

    dayjs.locale('es');
    dayjs.extend(localizedFormat);
    const option = ref<boolean>(false);
    const store = useServiceStore();

    interface Props{
        id: number;
        captain: string;
        date: string;
        hour: string;
        territory: number[];
        house: string;
    }
    const props = defineProps<Props>();

    const date = dayjs(props.date);

    // delete task
    
</script>
<style lang='scss' scoped>
    @keyframes hover_animation{
        0% {
	    background-position: 0% 50%;
        }
        50% {
            background-position: 100% 200%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .Task{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: map-get($sizes, "gap");
        background-color: map-get($colors, "ligth_black");
        border-radius: map-get($sizes, "border-radius");
        @media screen and (max-width: #{ map-get($breackpoints, "medium") }) {
            flex-direction: column;
            align-items: stretch;
        }
        &-container{
            display: flex;
            align-items: center;
            gap: map-get($sizes, "gap");
            height: 100%;
            padding: map-get($sizes, "padding");
            position: relative;
            @media screen and (max-width: #{ map-get($breackpoints, "medium") }) {
                flex-direction: column;
                align-items: flex-start;
            }
            &:nth-child(2){
                cursor: pointer;
                background-color: map-get($colors, "secundary-one");
                background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
            }
        }
        &-date{
            display: grid;
            place-content: center center;
            text-align: center;
            color: map-get($colors, "secundary-one");
            text-transform: capitalize;
            &-day{
                font-size: 0.9em;
            }
        }
        &-separator{
            height: 100%;
            width: 1px;
            background-color: map-get($colors, "secundary-one");
            @media screen and (max-width: #{ map-get($breackpoints, "medium") }) {
                width: 100%;
                height: 1px;
            }
        }
        &-info{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: auto;
            gap: map-get($sizes, "gap");
            width: 100%;
            text-transform: capitalize;
        }
        &-option{
            > path{
                fill: map-get($colors, "ligth_black");
            }
            width: 100%;
            @media screen and (max-width: #{ map-get($breackpoints, "medium") }) {
                max-height: 50px;
            }
            &-container{
                position: absolute;
                top: 100%;
                right: 0;
                background-color: map-get($colors, "ligth_black");
                border-radius: calc(map-get($sizes, "border-radius") - map-get($sizes, "padding"));
                overflow: hidden;
                z-index: 100;
                @media screen and (max-width: #{ map-get($breackpoints, "medium") }) {
                    width: 100%;
                }
            }
            &-option{
                padding: map-get($sizes, "padding");
                text-align: center;
                &:hover{
                    background-color: map-get($colors, "secundary-one");
                }
            }
        }
        &-button{
            border-radius: 0 map-get($sizes, "border-radius") map-get($sizes, "border-radius") 0;
            @media screen and (max-width: #{ map-get($breackpoints, "medium") }) {
                border-radius: 0 0 map-get($sizes, "border-radius") map-get($sizes, "border-radius");
            }
        }
        &-label{
            font-size: .75rem;
        }
    }
</style>