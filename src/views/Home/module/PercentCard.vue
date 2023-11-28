<template>
    <HomeCard class="Black-bg CardHome">
        <div class="White-font">Territorios Usados</div>
        <div class="CardHome-content">
            <svg class="CardHome-svg">
                <circle cx="60" cy="60" r="60"></circle>
                <circle cx="60" cy="60" r="60"></circle>
            </svg>
            <div class="CardHome-percent">
                <span class="Yellow-font CardHome-text">50%</span>
            </div>
        </div>
    </HomeCard>
</template>
<script lang='ts' setup>
    import HomeCard from '../components/HomeCard.vue';

</script>   
<style lang='scss' scoped>
    $stroke-width: .625rem;
    $svg-size: 10rem; 

    .CardHome{
        border: solid 2px map-get($colors, "secundary-one");
        &-title{
            color: map-get($colors, "black");
        }
        &-content{
            position: relative;
            height: calc(100% - (map-get($sizes, "padding") * 2));
        }
        &-svg{
            height: calc($svg-size + $stroke-width);
            width: calc($svg-size + $stroke-width);
            margin: 0 auto;
            transform: rotate(-90deg);
            @media screen and (max-width: #{ map-get($breackpoints, "large") }) {
                display: none;
            }
            & circle{
                height: $svg-size;
                width: $svg-size;
                fill: none;
                stroke-width: $stroke-width;    
                stroke: map-get($colors, "secundary-one");
                transform: translate(23px, 23px);
                stroke-dasharray: 502;
                stroke-dashoffset: 502;
                &:nth-child(1){
                    stroke-dashoffset: 0;
                    stroke: map-get($colors, "white");
                }
                &:nth-child(2){
                    stroke-dashoffset: calc(502 + (502 * 50) / 100);
                    stroke: map-get($colors, "secundary-one");
                }
            }
        }
        &-percent{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            line-height: normal;
        }
        &-text{
            font-size: map-get($font_size, "m");
            @media screen and (max-width: #{ map-get($breackpoints, "large") }){
                font-size: map-get($font_size, "s");
            }
        }
    }
</style>