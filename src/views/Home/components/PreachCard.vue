<template>
    <div class="PreachCard">
        <div class="PreachCard-id Yellow-font font_xxl">
            {{ props.id }}
        </div>
        <div class="PreachCard-databox"> 
            <ol class="PreachCard-data">
                <li class="PreachCard-item">
                    <span class="PreachCard-title">Terrotorio/s:</span>
                    <div class="PreachCard-info">{{ props.territorys.toString() }}</div>
                </li>
                <li class="PreachCard-item">
                    <span class="PreachCard-title">Lugar de Salida:</span>
                    <div class="PreachCard-info">{{ props.from }}</div>
                </li>
                <li class="PreachCard-item">
                    <span class="PreachCard-title">Dia de Salida:</span>
                    <div class="PreachCard-info">{{ day }}</div>
                </li>
                <li class="PreachCard-item">
                    <span class="PreachCard-title">Hora de Salida:</span>
                    <div class="PreachCard-info">{{ props.hour }}</div>
                </li>
                <li class="PreachCard-item">
                    <span class="PreachCard-title">Vencimiento:</span>
                    <div class="PreachCard-info">{{ expiration }}</div>
                </li>
            </ol>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { computed } from 'vue';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import 'dayjs/locale/es';

    dayjs.locale('es');
    dayjs.extend(relativeTime);

    const day = computed(() => dayjs(props.day).format("DD-MM-YY"));
    const expiration = computed(() => dayjs(props.expiration).fromNow());

    interface Props{
        id: number | string;
        territorys: number[] | number;
        from: string;
        hour: string;
        day: string;
        expiration: string;
    }

    const props = defineProps<Props>();
</script>
<style lang='scss' scoped>
    .PreachCard{
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-radius: map-get($sizes, "border-radius");
        border: 1px solid map-get($colors, "black");
        background-color: map-get($colors, "secundary-two");
        overflow: hidden;
        &-id{
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 20%;
            line-height: 100%;
            padding: map-get($sizes, "padding");
        }
        &-databox{
            width: 100%;
            background-color: map-get($colors, "white");
            padding: map-get($sizes, "padding");
            border-radius: map-get($sizes, "border-radius") 0 0 map-get($sizes, "border-radius");
            border-left: 1px solid map-get($colors, "black");
        }
        &-data{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 5px;
            font-family: map-get($font, "secundary");
        }
        &-title{
            font-size: 0.7em;
            color: map-get($colors, "grey");
        }
        &-info{
            line-height: 40%;
            font-size: map-get($font_size, "l");
            text-transform: capitalize;
        }
    }
</style>