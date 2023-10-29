<template>
    <div class="MapLayout">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .MapLayout{
        display: flex;
        @include flex(center, flex-start, 10px);
        min-height: calc(100vh - (70px + 70px));
    }
</style>