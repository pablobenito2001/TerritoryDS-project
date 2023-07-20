<template>
    <router-link to="/map" class="HomeCard Card">
        <div class="HomeCard-content">
            <span class="HomeCard-title Card-title">Ver Mapa</span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="HomeCard-arrow Card-arrow">
                <path d="M12.3596 8.74321L21.543 8.68312L21.6031 17.8666M8.76729 21.6272L21.4153 8.81256" fill="none" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="HomeCard-icon">
            <svg width="73" height="73" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg" class="Card-svg">
                <path d="M63.25 25.875V43.125C63.25 50.3125 61.8125 55.3437 58.5925 58.5925L40.25 40.25L62.4737 18.0262C62.9912 20.2975 63.25 22.885 63.25 25.875Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <path d="M62.4737 18.0262L18.0262 62.4737C9.3725 60.49 5.75 54.51 5.75 43.125V25.875C5.75 11.5 11.5 5.75 25.875 5.75H43.125C54.51 5.75 60.49 9.3725 62.4737 18.0262Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <path d="M58.5925 58.5925C55.3437 61.8125 50.3125 63.25 43.125 63.25H25.875C22.885 63.25 20.2975 62.9912 18.0262 62.4737L40.25 40.25L58.5925 58.5925Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <path d="M17.94 22.9425C19.895 14.5188 32.545 14.5188 34.5 22.9425C35.6212 27.8875 32.5162 32.085 29.785 34.6725C28.8232 35.5866 27.5469 36.0963 26.22 36.0963C24.8931 36.0963 23.6168 35.5866 22.655 34.6725C19.9237 32.085 16.79 27.8875 17.94 22.9425Z" stroke-width="2.5" fill="none"/>
                <path d="M26.1481 25.0125H26.174" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
        </div>
    </router-link>
</template>
<script lang='ts' setup>
    
</script>
<style lang='scss' scoped>
    .Card{
        background: map-get($colors, "secundary-two") url('@/assets/images/map_background.png') no-repeat;
        background-size: cover;
        cursor: pointer;
        transition: background-color .6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover{
            background-color: map-get($colors, "black");
        }
        &-title{
            color: map-get($colors, "white");
        }
        &-arrow{
            background-color: map-get($colors, "white");
            stroke: map-get($colors, "black");
        }
        &-svg{
            stroke: map-get($colors, "white");
        }
    }
</style>