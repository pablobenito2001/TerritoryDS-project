<template>
    <input :type="props.type" :id="props.id" class="Input" @input="sendValue">
</template>
<script lang='ts' setup>
    interface Props{
        type: string;
        id: string;
        value: string;
    }
    const props = defineProps<Props>();
    const emit = defineEmits<{
        (e: 'update:value', value: string): void
    }>();

    function sendValue(e: Event){
        const value = (e.target as HTMLInputElement).value;
        emit('update:value', value.toLocaleLowerCase());
    }
</script>
<style lang='scss' scoped>
    .Input{
        width: 100%;
        padding: map-get($sizes, "padding");
        background-color: map-get($colors, "ligth_black");
        border-radius: calc(map-get($sizes, "border-radius") - map-get($sizes, "padding"));
        transition: color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
</style>