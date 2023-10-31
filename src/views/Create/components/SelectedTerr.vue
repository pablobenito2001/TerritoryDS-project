<template>
    <TransitionGroup tag="ul" class="SelectedTerr" name="list" v-if="props.terr.length !== 0">
        <li
        v-for="item in props.terr"
        class="SelectedTerr-item" 
        :key="item">
            <span>Territorio</span>
            <span>{{ item }}</span>
        </li>
    </TransitionGroup>
    <span v-else class="SelectedTerr-none">Territorios no seleccionados.</span>
</template>
<script lang='ts' setup>
    interface Props{
        terr: number[];
    }
    const props = defineProps<Props>();
</script>
<style lang='scss' scoped>
    .SelectedTerr{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 6.25rem;
        gap: map-get($sizes, "gap");
        &-item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: .125rem solid map-get($colors,"black");
            box-shadow: .25rem .25rem 0 0 map-get($colors, "black");
            border-radius: .25rem;
        }
        &-none{
            display: inline-block;
            width: 100%;
            text-align: center;
        }
    }

    .list-move,
    .list-enter-active,
    .list-leave-active {
        transition: all 0.2s ease;
    }

    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateY(10px);
    }
</style>