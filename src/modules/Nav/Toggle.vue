<template>
    <div class="Toggle" @click="darkMode">
        <span class="Toggle-span">Claro</span>
        <div class="Toggle-toggle" :class="{ 'isDark': isDark }">
            <div class="Toggle-icon Toggle-sun">
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="Toggle-svg">
                    <g clip-path="url(#clip0_3_46)">
                    <path d="M8.49998 13.6042C9.72108 13.6042 10.8922 13.1191 11.7556 12.2556C12.6191 11.3922 13.1041 10.2211 13.1041 9.00001C13.1041 7.77891 12.6191 6.60782 11.7556 5.74437C10.8922 4.88092 9.72108 4.39584 8.49998 4.39584C7.27888 4.39584 6.10779 4.88092 5.24434 5.74437C4.38089 6.60782 3.89581 7.77891 3.89581 9.00001C3.89581 10.2211 4.38089 11.3922 5.24434 12.2556C6.10779 13.1191 7.27888 13.6042 8.49998 13.6042Z" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.5575 14.0575L13.4654 13.9654M13.4654 4.03457L13.5575 3.94249M3.44252 14.0575L3.5346 13.9654M8.50002 1.97332V1.91666M8.50002 16.0833V16.0267M1.47335 8.99999H1.41669M15.5834 8.99999H15.5267M3.5346 4.03457L3.44252 3.94249" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_3_46">
                    <rect width="17" height="17" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="Toggle-icon Toggle-moon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="Toggle-svg">
                    <path d="M1.93794 9.2975C2.19294 12.9454 5.28836 15.9133 8.99294 16.0763C11.6067 16.1896 13.9442 14.9713 15.3467 13.0517C15.9275 12.2654 15.6159 11.7413 14.6454 11.9183C14.1709 12.0033 13.6821 12.0388 13.1721 12.0175C9.70836 11.8758 6.87502 8.97875 6.86086 5.5575C6.85377 4.63667 7.04502 3.76542 7.39211 2.97209C7.77461 2.09375 7.31419 1.67584 6.42877 2.05125C3.62377 3.23417 1.70419 6.06042 1.93794 9.2975Z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <span class="Toggle-span">Oscuro</span>
    </div>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';
    const isDark = ref<boolean>(false);

    function darkMode(e: Event){
        isDark.value = !isDark.value;
        document.body.classList.toggle('Theme--dark', isDark.value);
    }
</script>
<style lang='scss' scoped>
    $toggle-width: 4.375rem;
    $toggle-height: 1.875rem;
    $toggle-ball-size: 1.75rem;
    
    .Toggle{
        @include flex(center, center, .625rem);
        &-span{
            color: var(--dark-color);
            font-size: 1em;
            font-weight: 500;
        }
        &-toggle{
            @include flex(space-between, center);
            cursor: pointer;
            width: $toggle-width;
            height: $toggle-height;
            border-radius: 6.25rem;
            border: solid 1px var(--alpha-50);
            padding: 0 .4375rem;
            position: relative;
            &::before{
                content: "";
                height: $toggle-ball-size;
                width: $toggle-ball-size;
                position: absolute;
                left: 0;
                top: 0;
                border-radius: 100%;
                background-color: map-get($colors , "secundary-one");
                transition: left .6s cubic-bezier(0.075, 0.82, 0.165, 1);
            }
        }
        &-svg{
            fill: var(--dark-color);
            stroke: var(--dark-color);
        }
    }
    .isDark{
        &::before{
            content: "";
            left: calc(100% - $toggle-ball-size);
        }
    }
</style>