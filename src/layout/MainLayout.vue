<template>
    <main class="Layout">
        <div class="Layout-container">
            <slot />
        </div>
    </main>
</template>
<script lang='ts' setup>

</script>
<styles lang='scss' scoped>
    .Layout{
        min-height: 100vh;
        padding: 13.125rem .625rem .625rem .625rem;
        &-container{
            max-width: 1300px;
            margin: auto;
        }
    }
</styles>