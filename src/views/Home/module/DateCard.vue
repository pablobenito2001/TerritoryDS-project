<template>
    <HomeCard class="Blue-bg White-font"> 
        <div>
            <span class="Yellow-font HomeCard-xl">{{ day }}</span> de {{ month }}
        </div>
        <div>
            del <span class="Yellow-font HomeCard-xl">{{ year }}</span>
        </div>
    </HomeCard>
</template>
<script lang='ts' setup>
    import HomeCard from '../components/HomeCard.vue';
    import dayjs from 'dayjs';

    import 'dayjs/locale/es';
    import localizedFormat from 'dayjs/plugin/localizedFormat';

    dayjs.locale('es');
    dayjs.extend(localizedFormat);
    const day = dayjs().format('DD');
    const month = dayjs().format('MMMM');
    const year = dayjs().format('YYYY')
</script>
<style lang='scss' scoped>
    .HomeCard-xl{
        line-height: 100%;
        font-size: map-get($font_size, "xl");
        @media screen and (max-width: #{ map-get($breackpoints, "large") }) {
            font-size: map-get($font_size, "s");
        }
    }
</style>