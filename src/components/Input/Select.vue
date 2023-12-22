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
        background-color: map-get($colors, "ligth_black");
        border-radius: calc(map-get($sizes, "border-radius") - map-get($sizes, "padding"));
        padding: map-get($sizes, "padding");
    }
</style>