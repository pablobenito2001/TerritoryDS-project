<template>
    <select :name="props.name" :id="props.id" class="Select">
        <option disabled selected class="Select-option">{{ props.name }}</option>
        <option 
        v-for="(item, index) in props.elements"
        :value="item.value"
        :key="index"
        class="Select-option">
            {{ item.innerText }}
        </option>
    </select>
</template>
<script lang='ts' setup>
    import { Option } from '../../interfaces/Option';

    interface Props{
        elements: Option[];
        name: string;
        id: string;
    }
    const props = defineProps<Props>();
</script>
<style lang='scss' scoped>
    .Select{
        width: 100%;
        border: solid .125rem map-get($colors, "black");
        box-shadow: .25rem  .25rem 0 0 map-get($colors, "black");
        border-radius: .25rem;
        padding: .9375rem;
        font-weight: bold;
        color: map-get($colors, "grey");
        transition: color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &-option{
            font-family: map-get($font, "principal");
            color: map-get($colors, "grey");
        }
        &:focus{
            color: map-get($colors, "black");
        }
    }
</style>