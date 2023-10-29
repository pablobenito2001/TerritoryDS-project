<template>
    <TransitionGroup tag="ul" class="SelectedTerr" name="list">
        <li
        v-for="item in props.terr"
        class="SelectedTerr-item"
        >
            <span>Territorio</span>
            <span>{{ item }}</span>
    </li>
    </TransitionGroup>
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
            border: 2px solid map-get($colors, "black");
            border-radius: .3125rem;
            &:hover{
                border: 2px solid map-get($colors, "secundary-two");
            }
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