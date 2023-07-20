<template>
    <div class="HomeCard Card">
        <span class="HomeCard-title">Resumen</span>
        <div>
            <button class="Card-button">
                <span>Resumen Tabla</span>
                <div class="Card-icon">
                    <svg width="25" height="25" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6667 2V22M10.6667 8.5H22.6667M10.6667 15.5H22.6667M9.66666 22H15.6667C20.6667 22 22.6667 20 22.6667 15V9C22.6667 4 20.6667 2 15.6667 2H9.66666C4.66666 2 2.66666 4 2.66666 9V15C2.66666 20 4.66666 22 9.66666 22Z" stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    </svg>
                </div>
            </button>
            <button class="Card-button">
                <span>Resumen Lista</span>
                <div class="Card-icon">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4167 9H8.91666M16.4167 15H8.91666M9.66666 22H15.6667C20.6667 22 22.6667 20 22.6667 15V9C22.6667 4 20.6667 2 15.6667 2H9.66666C4.66666 2 2.66666 4 2.66666 9V15C2.66666 20 4.66666 22 9.66666 22Z" stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    </svg>
                </div>
            </button>
        </div>
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Card{
        --s: 8.75rem; /* control the size */
        --_g: #00000000 52%,#1e1e1e16 /* first color */ 54% 57%,#0000 59%; 
        background: 
        radial-gradient(farthest-side at -33.33% 50%,var(--_g)) 0 calc(var(--s)/2),
        radial-gradient(farthest-side at 50% 133.33%,var(--_g)) calc(var(--s)/2) 0,
        radial-gradient(farthest-side at 133.33% 50%,var(--_g)),
        radial-gradient(farthest-side at 50% -33.33%,var(--_g)); /* second color */
        background-size: calc(var(--s)/4.667) var(--s),var(--s) calc(var(--s)/4.667);
        background-color: map-get($colors , "secundary-two");
        color: map-get($colors, "white");
        &-button{
            width: 100%;
            @include flex(space-between, center);
            background-color: map-get($colors, "black");
            border-radius: .9375rem;
            padding: 0 0 0 1.25rem;
            border: solid .0625rem map-get($darked-colors, "alpha-20");
            cursor: pointer;
            transition: filter .6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:first-child{
                margin: 0 0 .625rem 0;
            }
            &:hover{
                filter: brightness(140%);
            }
        }
        &-icon{
            padding: .9375rem 1.5625rem;
            border-left: solid .0625rem map-get($darked-colors, "alpha-20");
        }
    }
</style>