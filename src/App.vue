<script setup lang="ts">
    import MainLayout from './layout/MainLayout.vue';
</script>
<template>  
    <main-layout>
		<router-view />
    </main-layout>
</template>
<style scoped lang="scss">
	:global(.HomeCard){
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: .625rem;
		padding: 1.875rem;
		border-radius: 2.5rem;
		position: relative;
	}
	:global(.HomeCard-title){
		font-size: 1.5625em;
		font-weight: 500;
	}
	:global(.HomeCard-arrow){
		background-color: var(--ligth-color);
		display: inline-block;
		width: unset;
		stroke: var(--dark-color);
		fill: var(--dark-color);
		border-radius: 100%;
	}
	:global(.HomeCard-content){
		@include flex(space-between, center, .625rem);
	}
	:global(.HomeCard-icon){
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
