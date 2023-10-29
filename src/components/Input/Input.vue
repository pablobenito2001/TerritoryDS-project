<template>
    <input :type="props.type" :id="props.id" class="Input">
</template>
<script lang='ts' setup>
    interface Props{
        type: string;
        id: string;
    }
    const props = defineProps<Props>();
</script>
<style lang='scss' scoped>
    .Input{
        width: 100%;
        padding: .9375rem;
        border: solid .125rem map-get($colors, "black");
        box-shadow: .25rem .25rem 0 0 map-get($colors, "black");
        border-radius: .25rem;
        font-weight: bolder;
        color: map-get($colors, "grey");
        transition: color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:focus{
            color: map-get($colors, "black");
        }
    }
</style>