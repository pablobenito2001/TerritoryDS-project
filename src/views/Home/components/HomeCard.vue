<template>
    <div class="HomeCard" :class="$attrs.class">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .HomeCard{
        width: 100%;
        padding: map-get($sizes, "padding");
        border-radius: map-get($sizes, "border-radius");
        border: solid 1px map-get($colors, "black");
        position: relative;
        &--button{
            cursor: pointer;
            box-shadow: map-get($sizes , "shadow-size-x") map-get($sizes , "shadow-size-x") 0 0 map-get($colors , "grey");
            transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                transform: translate(map-get($sizes , "shadow-size-x"), map-get($sizes , "shadow-size-x"));
                box-shadow: 0 0 0 0 map-get($colors , "grey");
            }
        }
    }
    :slotted(.HomeCard-select){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100% - map-get($sizes, "padding") * 2);
        position: relative;
    }
    :slotted(.HomeCard-text){
        font-size: 0.8em;
        position: absolute;
        bottom: 2.5rem;
    }
</style>