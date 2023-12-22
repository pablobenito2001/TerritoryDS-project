<template>
    <div class="CardWrapper">
        <CardHome class="CardWrapper-card" :icon="homeLogo" text-size="3">23 de Noviebre<br>del 2023</CardHome>
        <CardHome class="CardWrapper-card CardWrapper-card--select" :icon="calendar" text-size="2" @click="() => router.push('/create')">Crear Salida</CardHome>
        <CardHome class="CardWrapper-card CardWrapper-card--select" :icon="list" text-size="2">Resumen</CardHome>
    </div>
</template>
<script lang='ts' setup>
    import router from '../../../router/router';
    import CardHome from './CardHome.vue';
    import homeLogo from '../../../assets/home.svg';
    import calendar from '../../../assets/calendar.svg';
    import list from '../../../assets/list.svg';
</script>
<style lang='scss' scoped>
    @keyframes cardAnimation_1{
        from{
            background-position: 0;
        }
        to{
            background-position: 1000%;
        }
    }

    @keyframes cardAnimation_2{
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

    .CardWrapper{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 8.75rem);
        gap: map-get($sizes, "gap");
        @media screen and (max-width: #{map-get($breackpoints, "medium")}) {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, auto);
        }
        &-card{
            cursor: pointer;
            &:nth-child(1){
                background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.16' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
                background-color: map-get($colors, "secundary-one");
                animation: cardAnimation_1 120s linear infinite alternate;
                box-shadow: 0 0 8px 2px map-get($colors, "secundary-one");
                cursor: default;
                grid-column: 1;
                grid-row: 1 / 3; 
                @media screen and (max-width: #{map-get($breackpoints, "medium")}) {
                    grid-row: unset;
                    grid-column: unset;
                }
            }
            &:nth-child(2){
                background-image: url('../../../assets/city.png');
                background-size: cover;
                grid-column: 2;
                grid-row: 1;
                &:hover{
                    animation: cardAnimation_1 11s linear infinite;
                }
                @media screen and (max-width: #{map-get($breackpoints, "medium")}) {
                    grid-row: unset;
                    grid-column: unset;
                }
            }
            &:nth-child(3){
                background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                grid-column: 2;
                grid-row: 2;
                transition: background-image 1s cubic-bezier(0.075, 0.82, 0.165, 1);
                &:hover{
                    background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    animation: cardAnimation_2 9s linear infinite alternate;
                }
                 svg{
                    fill: aquamarine;
                } 
                @media screen and (max-width: #{map-get($breackpoints, "medium")}) {
                    grid-row: unset;
                    grid-column: unset;
                }
            }  
            &--select{
                transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
                &:hover{
                    background-color: map-get($colors, "secundary-two");
                    box-shadow: 0 0 8px 2px map-get($colors, "secundary-two");
                }
            }
        }
    }
</style>