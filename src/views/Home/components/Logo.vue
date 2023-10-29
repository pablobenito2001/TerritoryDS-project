<template>
    <header class="Logo">
        <img :src="logo" alt="terr's logo" width="48" height="48" class="Logo-logo">
        <h1 class="Logo-title Logo-font">Terr</h1>
        <span class="Logo-version Logo-font">v1.6</span>
    </header>
</template>
<script lang='ts' setup>
    import logo  from '../../../../public/terr_icon.svg';
</script>
<style lang='scss' scoped>
    .Logo{
        display: flex;
        align-items: center;
        gap: .3125rem;
        &-title{
            font-size: 3rem;
        }
        &-logo{
            max-width: 48px;
            display: inline-block;
            object-fit: contain;
        }
        &-version{
            align-self: flex-end;
            font-size: 0.7em;
        }
        &-font{
            color: map-get($colors , "grey");
            font-family: map-get($font, "principal");
            font-weight: 700;
        }
    }
</style>