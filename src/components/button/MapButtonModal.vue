<template>
    <button class="Map" @click="() => open = true">
        Mapa 
    </button>
    <teleport to='body'>
        <div class="Map-container" @click.self="() => open = false" v-if="open">
            <div class="Map-box">
                <img src="/images/mapa.jpg" alt="territory map" class="Map-map"/>
            </div>
        </div>
    </teleport>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';

    const open = ref<boolean>(false);
</script>
<styles lang='scss' scoped>
    .Map{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .625rem 2.1875rem;
        font-size: 1.25em;
        color: var(--white);
        border: solid 2px var(--white);
        border-radius: 6.25rem;
        cursor: pointer;
        transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover{
            background-color: var(--white);
            color: var(--black);
        }
        @media screen and (max-width: 800px) {
            padding: .625rem 1.25rem ;
            font-size: 1.1em;
        }
        &-container{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            padding: .3125rem;
            background-color: var(--alpha-black);
        }
        &-box{
            background-color: var(--red);
            max-width: 43.75rem;
            padding: .625rem;
            border-radius: .3125rem;
        }
        &-map{
            border-radius: .3125rem;
        }
    }
</styles>