<template>
    <div class="FormCreate">
        <form action="#" class="FormCreate-box">
            <span class="font_xl Yellow-font font_line_100 FormCreate-title">Crear Salida</span>
            <div class="FormCreate-section">
                <label for="captain" class="FormCreate-label">
                    <svg xmlns="http://www.w3.org/2000/svg" class="FormCreate-svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m280-40 112-564-72 28v136h-80v-188l202-86q14-6 29.5-7t29.5 4q14 5 26.5 14t20.5 23l40 64q26 42 70.5 69T760-520v80q-70 0-125-29t-94-74l-25 123 84 80v300h-80v-260l-84-64-72 324h-84Zm260-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/></svg> 
                    Seleccione un Capitán:
                </label>                
                <Select id="captain" name="Capitan" :elements="optionsCaptain"/>
            </div>
            <div class="FormCreate-section">
                <label for="hour" class="FormCreate-label">
                    <svg xmlns="http://www.w3.org/2000/svg" class="FormCreate-svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                    Seleccione una Hora:
                </label>
                <Select id="hour" name="Hora" :elements="optionsHour"/>
            </div>
            <div class="FormCreate-section">
                <label for="house" class="FormCreate-label">
                    <svg xmlns="http://www.w3.org/2000/svg" class="FormCreate-svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160v-80h160v-560H480v56l-80-58v-78h520v720H680Zm-640 0v-400l280-200 280 200v400H360v-200h-80v200H40Zm80-80h80v-200h240v200h80v-280L320-622 120-480v280Zm560-360ZM440-200v-200H200v200-200h240v200Z"/></svg>
                    Seleccione Lugar de Salida:
                </label>
                <Select id="house" name="Lugar de Salida" :elements="optionsHouse"/>
            </div>
            <div class="FormCreate-section">
                <label for="date" class="FormCreate-label">
                    <svg xmlns="http://www.w3.org/2000/svg" class="FormCreate-svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                    Seleccione un Dia:
                </label>
                <Input id="date" type="date"/> 
            </div>
            <div class="FormCreate-section">
                <label for="hour" class="FormCreate-label">
                    <svg xmlns="http://www.w3.org/2000/svg" class="FormCreate-svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-301q99-80 149.5-154T680-594q0-56-20.5-95.5t-50.5-64Q579-778 544-789t-64-11q-29 0-64 11t-65 35.5q-30 24.5-50.5 64T280-594q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-514Z"/></svg>
                    Territorios Seleccionados:
                </label>
                <SelectedTerr :terr="queryParams"/>
            </div>
        </form>
        <GeneralButton>Crear</GeneralButton>
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

    const hour = ref<string>('');
    const house = ref<string>('');
    const captain = ref<string>('');
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
    $max-size-svg: 25px;

    .FormCreate{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: map-get($sizes, "gap");
        padding: map-get($sizes, "padding");
        border-left: 2px solid map-get($colors, "grey");
        &-title{
            display: inline-block;
            margin-bottom: 1.25rem;
        }
        &-section{
            margin-bottom: .9375rem;
        }
        &-label{
            display: flex;
            align-items: center;
            margin-bottom: .1875rem;
            font-weight: bolder;
            color: map-get($colors, "grey");
        }
        &-svg{
            display: inline;
            max-width: $max-size-svg;
            max-height: $max-size-svg;
        }
    }
</styles>   ../../../composable/useAdminQuery