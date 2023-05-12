<template>
    <h2 class="Title"><slot /></h2>
</template>
<script lang='ts' setup>

</script>
<styles lang='scss' scoped>
    .Title{
        font-size: 4.06em;
        color: var(--green);
        line-height: normal;
        @media screen and (max-width: 800px) {
            font-size: 3.125em;
        }
    }
</styles>