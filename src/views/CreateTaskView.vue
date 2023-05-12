<template>
    <MainLayout class="Create">
        <h2 class="Create-title">Crear Salida</h2>
        <TitleMain>Detalles</TitleMain>
        <FormTaskModule />
    </MainLayout>
</template>
<script lang='ts' setup>
    import MainLayout from '../layout/MainLayout.vue';
    import FormTaskModule from '../modules/FormTaskModule.vue'
    import TitleMain from '../components/main/TitleMain.vue';
</script>
<styles lang='scss' scoped>
    .Create{
        &-title{
            font-size: 1.5em;
            line-height: normal;
            line-height: normal;
        }
    }
</styles>