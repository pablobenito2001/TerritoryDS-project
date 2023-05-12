<template>
    <div class="Error">
        <div class="Error-box">
            <TitleMain>Page Not Found</TitleMain>
            <span class="Error-sub">Error 404</span>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import TitleMain from '../components/main/TitleMain.vue';
</script>
<styles lang='scss' scoped>
    .Error{
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        &-sub{
            text-align: center;
            font-size: 1.2em;
        }
    }
</styles>