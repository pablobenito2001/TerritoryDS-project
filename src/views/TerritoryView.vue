<template>
    <div class="Territory">
        <img src="/images/mapa.jpg" alt="mapa territorio" class="Territory-map">
    </div>
</template>
<script lang='ts' setup>

</script>
<styles lang='scss' scoped>
    .Territory{
        min-width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        &-map{
            max-width: 62.5rem;
        }
    }
</styles>