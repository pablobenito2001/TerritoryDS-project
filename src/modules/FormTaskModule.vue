<template>
    <div>
        <ButtonContainerLayout>
            <RouterButton to="territory">Ver Mapa</RouterButton>
            <button @click.prevent="sendInfo" class="Form-button">Crear</button>
        </ButtonContainerLayout>
        <form action="#">
            <div class="Form">
                <div class="Form-inputBox">
                    <label 
                    for="name" 
                    class="Form-label">
                        Nombre de la Salida: 
                        <span v-if="v$.name.$error" class="Form-errorText">{{ String(v$.name.$errors[0].$message).toLowerCase() }}</span>
                    </label>
                    <input type="text" class="Form-input" :class="{ 'Form-error': v$.name.$error }" id="name" placeholder="Nombre de Salida" v-model="formData.name">
                </div> 
                <div class="Form-box">
                    <div class="Form-inputBox">
                        <label 
                        for="date" 
                        class="Form-label">
                            Dia de Salida:
                            <span v-if="v$.day.$error" class="Form-errorText">{{ String(v$.day.$errors[0].$message).toLowerCase() }}</span>
                        </label>
                        <input type="date" id="date" class="Form-input" max="2999-01-01" :class="{ 'Form-error': v$.day.$error }" v-model="formData.day">
                    </div>
                    <div class="Form-inputBox">
                        <label 
                        for="time" 
                        class="Form-label">
                            Hora de Salida:
                            <span v-if="v$.hour.$error" class="Form-errorText">{{ String(v$.hour.$errors[0].$message).toLowerCase() }}</span>
                        </label>
                        <input type="time" id="hour" class="Form-input" :class="{ 'Form-error': v$  .hour.$error }" v-model="formData.hour">
                    </div>
                </div>
                <div class="Form-inputBox">
                    <label 
                    for="captain" 
                    class="Form-label">
                        Ingrese capitan:
                        <span v-if="v$.captain.$error" class="Form-errorText">{{ String(v$.captain.$errors[0].$message).toLowerCase() }}</span>
                    </label>
                    <input type="text" class="Form-input" :class="{ 'Form-error': v$.captain.$error }" id="captain" placeholder="Ej: Ariel Reyes" v-model="formData.captain">
                </div>
                <div class="Form-inputBox">
                    <label 
                    for="terr" 
                    class="Form-label">
                        Ingrese el Territorio
                        <span v-if="v$.territory.$error" class="Form-errorText">{{ String(v$.territory.$errors[0].$message).toLowerCase() }}</span>
                    </label>
                    <select name="territory" id="terr" class="Form-input" v-model="formData.territory" :class="{ 'Form-error': v$.territory.$error }">
                        <option value selected disabled>Seleccione una opcion</option>
                        <option
                        v-for="item in avaliableTask"
                        :key="item.nro"
                        :value="item"
                        >{{ item.nro }} - {{ item.streets.join(' | ') }}</option>
                    </select>
                </div>
                <div class="Form-inputBox">
                    <label 
                    for="house" 
                    class="Form-label">
                        Lugar de Salida:
                        <span v-if="v$.house.$error" class="Form-errorText">{{ String(v$.house.$errors[0].$message).toLowerCase() }}</span>
                    </label>
                    <input type="text" class="Form-input" :class="{ 'Form-error': v$.house.$error }" id="house" placeholder="Ej: Gonzales" v-model="formData.house">
                </div>
            </div>
        </form>
    </div>
</template>
<script lang='ts' setup>
    //Componentes
    import RouterButton from '../components/button/RouterButton.vue';
    import ButtonContainerLayout from '../layout/ButtonContainerLayout.vue';
    //

    //utils
    import type TaskTerritory from '../interfaces/TaskTerritory';
    import { reactive } from 'vue';
    import { useTaskStore } from '../store/taskStore';
    import { useTerritoryStore } from '../store/territoryStore';
    import { storeToRefs } from 'pinia';
    import dayjs from 'dayjs';
    import useValidate from '@vuelidate/core';
    import { required, minLength, maxLength } from '@vuelidate/validators';
    import router from '../router/router';
    
    //

    const taskStore = useTaskStore();
    const { avaliableTask } = storeToRefs(useTerritoryStore());

    //form refs
    const formData= reactive({
        name: '',
        day: '',
        hour: '',
        captain: '',
        territory: '',
        house: '',
    })
    //
    
    //vuelidate
    const rules = {
        name: { required,  maxLength: maxLength(15), minLength: minLength(3)},
        day: { required },
        hour: { required },
        captain: { required },
        territory: { required },
        house: { required }
    }
    
    const v$ = useValidate(rules, formData)
    
    //create task
    async function sendInfo(){
        const result = await v$.value.$validate();
        if (result) {
            const data: TaskTerritory = {
                name: formData.name,
                date: dayjs(formData.day).toString(),
                hour: formData.hour,
                captain: formData.captain,
                territory: formData.territory,
                house: formData.house,
                creationDate: dayjs().toString(),
                expirationDate: dayjs(formData.day).add(3, 'weeks').add(1, 'day').toString()
            };
            //push task in taskStore
            taskStore.addTask(data);
            //back 
            router.push('/')
        }
    }
    
</script>
<styles lang='scss' scoped>
    .Form{
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        gap: 20px;
        max-width: 700px;
        margin: auto;
        &-box{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }
        &-inputBox{
            width: 100%;
        }
        &-input{
            width: 100%;
            padding: 15px 10px;
            background-color: var(--dark-red);
            border-radius: 5px;
            font-family: var(--font-secundary);
            font-size: 1.2em;
            color: var(--alpha-white);
            &:focus{
                filter: brightness(140%);
            }
            &::placeholder{
                color: var(--alpha-white);
            }
            &::-webkit-calendar-picker-indicator{
                background-color: var(--green);
                padding: 5px;
                border-radius: 3px;
            }
        }
        &-label{
            font-family: var(--font-secundary);
            font-size: 1.2em;
            margin-bottom: 8px;
        }
        &-button{
            border: unset;
            padding: 10px 35px;
            font-size: 1.25em;
            background-color: var(--green);
            border-radius: 100px;
            color: var(--black);
            cursor: pointer;
            transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                background-color: var(--white);
            }
        }
        &-error{
            border: solid 2px rgb(255, 60, 60);
        }
        &-errorText{
            font-size: .9em;
            color: rgb(255, 60, 60);
        }
    }
</styles>   