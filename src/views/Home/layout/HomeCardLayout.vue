<template>
    <div class="HomeCardLayout">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .HomeCardLayout{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 14.375rem;
        gap: map-get($sizes, "gap");
        @media screen and (max-width: #{ map-get($breackpoints, "large") }) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 130px);
        }
        @media screen and (max-width: #{ map-get($breackpoints, "small") }) {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(4, 5rem);
            gap: .625rem;
        }
    }
</style>