<template>
    <div class="FormCreate">
        <span class="font_s Blue-font font_line_100 FormCreate-title">Crear Salida</span>
        <form action="#">
            <div class="FormCreate-section">
                <label for="captain" class="FormCreate-label">Seleccione un Capitán:</label>
                <Select id="captain" name="Capitan" :elements="optionsCaptain"/>
            </div>
            <div class="FormCreate-section">
                <label for="hour" class="FormCreate-label">Seleccione una Hora:</label>
                <Select id="hour" name="Hora" :elements="optionsHour"/>
            </div>
            <div class="FormCreate-section">
                <label for="house" class="FormCreate-label">Seleccione Lugar de Salida:</label>
                <Select id="house" name="Lugar de Salida" :elements="optionsHouse"/>
            </div>
            <div class="FormCreate-section">
                <label for="date" class="FormCreate-label">Seleccione un Dia:</label>
                <Input id="date" type="date"/> 
            </div>
            <div class="FormCreate-section">
                <label for="hour" class="FormCreate-label">Territorios Seleccionados:</label>
                <SelectedTerr  :terr="queryParams"/>
            </div>
            <GeneralButton>Crear</GeneralButton>
        </form>
    </div>
</template>
<script lang='ts' setup>
    import SelectedTerr from '../components/SelectedTerr.vue';
    import Select from '../../../components/Input/Select.vue';
    import Input from '../../../components/Input/Input.vue';
    import GeneralButton from '../../../components/button/GeneralButton.vue';
    import { optionsCaptain, optionsHour, optionsHouse } from '../../../const/SelectOptions';
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const queryParams = ref<number[]>([]);
    const useRouter = useRoute();

    watch(
    () => useRouter.query,
    () => {
        const query: number[] | boolean = typeof (useRouter.query.terr) === 'string' && (<string>useRouter.query.terr).split(',').map((elem: string) => Number(elem));

        Array.isArray(query) ? queryParams.value = [...query] : queryParams.value = []; 
    });
</script>
<styles lang='scss' scoped>
    .FormCreate{
        padding: map-get($sizes, "padding");
        border-left: 2px solid map-get($colors, "grey");
        &-title{
            display: inline-block;
            margin-bottom: 3.125rem;
        }
        &-section{
            margin-bottom: .625rem;
        }
        &-label{
            margin-bottom: .125rem;
            font-weight: bold;
            color: map-get($colors, "grey");
        }
        &-option{
            color: map-get($colors, "black");
            font-family: map-get($font, "principal");
        }
        &-input{
            width: 100%;
            padding: map-get($sizes, "padding");
            border: 2px solid map-get($colors, "grey");
            border-radius: .625rem;
            font-weight: 700;
            transition: border 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:focus{
                border: 2px solid map-get($colors, "secundary-two");
                color: map-get($colors, "secundary-two");
            }
        }
    }
</styles>   ../../../composable/useAdminQuery