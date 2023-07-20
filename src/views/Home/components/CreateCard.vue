<template>
    <RouterLink to="/create" class="HomeCard Card">
            <div class="HomeCard-content">
            <span class="HomeCard-title Card-title">Crear Salida</span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="HomeCard-arrow Card-arrow">
                <path d="M12.3596 8.74321L21.543 8.68312L21.6031 17.8666M8.76729 21.6272L21.4153 8.81256" fill="none" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="HomeCard-icon">
            <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg" class="Card-svg">
                <path d="M2.25 36.5H70.75M36.5 70.75V2.25" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </RouterLink>
</template>
<script lang='ts' setup>
    
</script>
<style lang='scss' scoped>
    .Card{
        background-color: var(--dark-color);
        cursor: pointer;
        transition: background-color .6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover{
            background-color: map-get($colors, "secundary-two");
        }
        &-title{
            color: var(--ligth-color);
        }
        &-svg{
            stroke: var(--ligth-color);
        }
    }
</style>