<template>
    <MainLayout class="Create">
        <h2 class="Create-title">Crear Salida</h2>
        <h2 class="Create-subtitle">Detalles</h2>
        <FormTaskModule />
    </MainLayout>
</template>
<script lang='ts' setup>
    import MainLayout from '../layout/MainLayout.vue';
    import FormTaskModule from '../modules/FormTaskModule.vue'
</script>
<styles lang='scss' scoped>
    .Create{
        &-title{
            font-size: 1.5em;
            line-height: normal;
            line-height: normal;
        }
        &-subtitle{
            font-size: 4.06em;
            color: var(--green);
            line-height: normal;
        }
    }
</styles>