<template>
    <div class="TerrShow" :class="{ 'TerrShow--open': Boolean(props.nro) }">   
        <template v-if="terr">
            <h3 class="TerrShow-title TerrShow-text">Territorio</h3>
            <span class="TerrShow-text TerrShow-terr">nro°{{ terr.nro }}</span>
        </template>
    </div>
</template>
<script lang='ts' setup>
    import { computed } from 'vue'
    import { territorys } from '@/const/Territories';

    interface Props{
        nro: string | number;
    }
    const props = defineProps<Props>();
    const terr = computed<typeof territorys[0]>(() => territorys.at(Number(props.nro) - 1))
</script>
<style lang='scss' scoped>
    .TerrShow{
        width: 0;
        overflow: hidden;
        background-color: var(--dark-color);
        border-radius: 20px;
        transition: width 150ms linear;
        &--open{
            width: auto;
            padding: 1.875rem;
        }
        &-text{
            display: inline-block;
            line-height: 100%;
            font-weight: 500;
        }
        &-title{
            color: var(--ligth-color);
            font-size: 1.5em;
            text-transform: uppercase;
            line-height: 100%;
        }
        &-terr{
            text-transform: uppercase;
            font-size: 2em;
            color: var(--ligth-color);
        }
        &-item{
            font-size: 1.3em;
        }
    }
</style>