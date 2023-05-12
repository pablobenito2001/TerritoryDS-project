<template>
    <MainLayout>
        <div class="Home">
            <h1 class="Home-title">Salidas al Territorio</h1>
            <TitleMain>{{ date }}</TitleMain>
            <div class="Home-btnBox">
                <RouterButton to="">Inicio</RouterButton>
                <RouterButton to="resume">Resumen</RouterButton>
                <RouterButton to="create" class="Home-mainBtn">Crear Salida</RouterButton>
            </div>
            <div class="Home-container">
                <router-view />
            </div>
        </div>
    </MainLayout>
</template>
<script lang='ts' setup>    
    import TitleMain from '../components/main/TitleMain.vue';
    import MainLayout from '../layout/MainLayout.vue';
    import RouterButton from '../components/button/RouterButton.vue';

    import { ref } from 'vue';  
    import dayjs from 'dayjs';
    import 'dayjs/locale/es';
    import localizedFormat from 'dayjs/plugin/localizedFormat'; 
    
    dayjs.locale('es');
    dayjs.extend(localizedFormat);
    const date = ref(dayjs().format('dddd D, MMMM YYYY').toLocaleUpperCase());
</script>   
<styles lang='scss' scoped>
    .Home{
        &-title{
            font-size: 1.5em;
            margin-bottom: 1.875rem;
            line-height: normal;
        }
        &-btnBox{
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            @media screen and (max-width: 450px){
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(max(150px, calc(100% / 4)), 1fr));
            }
        }
        &-mainBtn{
            background-color: var(--green);
            color: var(--black);
            border: unset;
        }
        &-container{
            padding: 2.1875rem 0 0 0;
        }
    }
</styles>