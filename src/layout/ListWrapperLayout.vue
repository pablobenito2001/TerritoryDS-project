<template>
    <ul class="ListWrapper">
        <slot />
    </ul>
</template>
<script lang='ts' setup>

</script>
<styles lang='scss' scoped>
    .ListWrapper{
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        gap: 2.5rem;
    }
</styles>