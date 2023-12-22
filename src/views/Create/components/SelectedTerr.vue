<template>
    <TransitionGroup tag="ul" class="SelectedTerr" name="list" v-if="props.terr.length !== 0">
        <li
        v-for="item in props.terr"
        class="SelectedTerr-item" 
        :key="item">
            <span>Territorio</span>
            <span class="font_xl font_line_100">{{ item }}</span>
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
        grid-auto-rows: auto;
        gap: map-get($sizes, "gap");
        &-item{
            display: grid;
            place-content: center center;
            text-align: center;
            background-color: map-get($colors, "secundary-one");
            border-radius: calc(map-get($sizes, "border-radius") - map-get($sizes, "padding"));
            padding: map-get($sizes, "padding");
            box-shadow: 0 0 8px 0px map-get($colors, "secundary-one");
            line-height: 100%;
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