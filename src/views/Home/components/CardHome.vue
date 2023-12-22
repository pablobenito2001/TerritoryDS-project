<template>
    <div class="Card">
        <div class="Card-box">
            <div class="Card-iconBox">
                <img :src="props.icon" alt="Icon Card">
            </div>
        </div>
        <div class="Card-box">
            <span class="Card-text" :class="textSize"><slot /></span>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';

    interface Props{
        icon: string;
        textSize: string;
    }

    const props = defineProps<Props>();
    const textSize = ref<string>("Card-text--1");

    switch(props.textSize){
        case '1':
            textSize.value = "Card-text--1";
            break;
        case '2': 
            textSize.value = "Card-text--2";
            break;
        case '3': 
            textSize.value = "Card-text--3";
            break;
        default: 
            textSize.value = "Card-text--1";
            break;
    }
</script>
<style lang='scss' scoped>
    .Card{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: map-get($sizes, "gap");
        padding: map-get($sizes, "padding");
        background-color: map-get($colors,  "ligth_black");
        border-radius: map-get($sizes, "border-radius");
        &-box{
            &:nth-child(1){
                align-self: flex-start;
            }
            &:nth-child(2){
                text-align: right;
            }
        }
        &-iconBox{
            background-color: map-get($colors, "black");
            padding: map-get($sizes, "padding");
            border-radius: calc(#{map-get($sizes, "border-radius")} - #{map-get($sizes, "padding")});
            @media screen and (max-width: #{map-get($breackpoints, "medium")}) {
                padding: .625rem;
            }
        }
        &-text{
            line-height: 100%;
            &--1{
                font-size: 1em;
            }
            &--2{
                font-size: 2em;
                @media screen and (max-width: #{map-get($breackpoints, "medium")}) {
                    font-size: 1.5em;
                }
            }
            &--3{
                font-size: 3em;
                @media screen and (max-width: #{map-get($breackpoints, "medium")}) {
                    font-size: 2em;
                }
            }
        }
    }
</style>