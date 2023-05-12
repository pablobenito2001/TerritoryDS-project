<template>
    <table class="Table">
        <tr class="Table-row">
            <th scope="col">Dia</th>
            <th scope="col">Hora</th>
            <th scope="col">Salida</th>
            <th scope="col">Territorio</th>
            <th scope="col">Capitán</th>
        </tr>
        <slot />
    </table>
</template>
<script lang='ts' setup>

</script>
<styles lang='scss' scoped>
    .Table{
        overflow-x: auto;
        min-width: 1300px;
        & th{
            background-color: var(--dark-red);
            padding: .9375rem;
            font-size: 1em;
            line-height: normal;
            text-align: left;
        }
        & tr:nth-child(even){
            background-color: var(--table-white);
        }
        td{
            padding: .9375rem;
            text-align: left;
            font-family: var(--font-secundary);
            font-size: 1.5em;
        }
    }
</styles>