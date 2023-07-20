<template>
    <div class="HomeCard Card">
        <span class="HomeCard-title Card-title">Territorios</span>
        <div class="Card-content">
            <svg class="Card-svg">
                <circle cx="80" cy="80" r="80"></circle>
                <circle cx="80" cy="80" r="80"></circle>
            </svg>
            <div class="Card-percent">
                <span>50%</span>
            </div>
        </div>
        <div class="Card-content">
            <div class="Card-info">
                <div class="Card-center">
                    <span class="Card-color Card-color--ligth"></span>
                    <span class="Card-whatis">Disponible</span> 
                </div>
                <span>50%</span>
            </div>
            <div class="Card-info">
                <div class="Card-center">
                    <span class="Card-color Card-color--dark"></span>
                    <span class="Card-whatis">Ocupado</span> 
                </div>
                <span>50%</span>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    $stroke-width: .8125rem;
    $svg-size: 10rem; 

    .Card{
        background-color: map-get($colors, "secundary-one" );
        &-title{
            color: map-get($colors, "black");
        }
        &-content{
            position: relative;
        }
        &-svg{
            height: calc($svg-size + $stroke-width);
            width: calc($svg-size + $stroke-width);
            margin: auto;
            transform: rotate(-90deg);
            & circle{
                height: $svg-size;
                width: $svg-size;
                fill: none;
                stroke-width: $stroke-width;
                stroke: map-get($colors, "white");
                transform: translate(.4375rem, .4375rem);
                stroke-dasharray: 502;
                stroke-dashoffset: 502;
                &:nth-child(1){
                    stroke-dashoffset: 0;
                    stroke: map-get($colors, "white");
                }
                &:nth-child(2){
                    stroke-dashoffset: calc(502 + (502 * 50) / 100);
                    stroke: map-get($colors, "black");
                }
            }
        }
        &-percent{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3em;
            font-weight: 500;
            color:  map-get($colors, "black");
        }
        &-info{
            @include flex(space-between, center, 5px);
            padding: .125rem .6875rem;
            color: map-get($colors, "black");
            font-size: .9em;
            font-weight: 500;
        }
        &-color{
            display: inline-block;
            width: 1.0625rem;
            height: 1.0625rem;
            border-radius: .3125rem;
            &--ligth{
                background-color: map-get($colors, "white");
            }
            &--dark{
                background-color: map-get($colors, "black");
            }
        }
        &-center{
            @include flex(flex-start, center, .3125rem);
        }
    }
</style>