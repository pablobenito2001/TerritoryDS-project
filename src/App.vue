<script setup lang="ts">
    import MainLayout from './layout/MainLayout.vue';
</script>
<template>  
	<main class="Main">
        <router-view />
    </main>
</template>
<style scoped lang="scss">
    .Main{
        background-color: map-get($colors, "black");
    }
</style>
