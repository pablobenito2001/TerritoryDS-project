<template>
    <div class="BtnContainer">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<styles lang='scss' scoped>
    .BtnContainer{
        display: flex;
        gap: .625rem;
        justify-content: flex-end;
        align-items: center;
    }
</styles>