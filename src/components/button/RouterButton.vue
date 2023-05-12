<template>
    <router-link :to="`/${props.to}`" class="Link" :class="$attrs.class">
        <slot />
    </router-link>
</template>
<script lang='ts' setup>
    interface Props{
        to: any;
    }

    const props = defineProps<Props>();
</script>
<styles lang='scss' scoped>
    .Link{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .625rem 2.1875rem;
        font-size: 1.25em;
        color: var(--white);
        border: solid 2px var(--white);
        border-radius: 6.25rem;
        transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover{
            background-color: var(--white);
            color: var(--black);
        }
        @media screen and (max-width: 800px) {
            padding: .625rem 1.25rem ;
            font-size: 1.1em;
        }
    }
</styles>