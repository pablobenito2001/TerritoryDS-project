<template>
    <li class="TaskResume">
        <div class="TaskResume-box">
            <h3 class="TaskResume-title">Dia:</h3>
            <span class="TaskResume-info">{{ day }}</span>
        </div>
        <div class="TaskResume-box">
            <h3 class="TaskResume-title">Hora:</h3>
            <span class="TaskResume-info">{{ props.hour }}</span>
        </div>
        <div class="TaskResume-box">
            <h3 class="TaskResume-title">Salida:</h3>
            <span class="TaskResume-info">{{ props.house }}</span>
        </div>
        <div class="TaskResume-box">
            <h3 class="TaskResume-title">Territorio:</h3>
            <span class="TaskResume-info">{{ props.territory.nro }}</span>
        </div>
        <div class="TaskResume-box">
            <h3 class="TaskResume-title">Capitán:</h3>
            <span class="TaskResume-info">{{ props.captain }}</span>
        </div>
    </li>
</template>
<script lang='ts' setup>
    import { computed } from 'vue';

    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import 'dayjs/locale/es';
    import type Territory from '../../interfaces/TaskInterface';

    dayjs.locale('es');
    dayjs.extend(relativeTime);

    interface Props {
        captain: string;
        day: string;
        hour: string;
        territory: Territory; 
        expiration: string;
        house: string;
    }

    const props = defineProps<Props>();

    const day = computed(() => dayjs(props.day).format("dddd DD-MM"));
</script>
<styles lang='scss' scoped>
    .TaskResume{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        border-radius: .5rem;
        line-height: normal;
        gap: .625rem;
        padding: 1.5625rem;
        border: solid 2px var(--white);
        &-title{
            font-size: 2.2em;
        }
        &-info{
            font-size: 1em;
            color: var(--alpha-white);
        }
        &-box{
            border: solid 2px var(--white);
            padding: .5rem;
            border-radius: .3125rem;
        }
    }
</styles>