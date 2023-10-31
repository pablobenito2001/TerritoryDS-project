<!-- <template>
    <tr
    v-for="(item, index) in props.group.items"
    :key="item.territory.nro"
    >
        <th scope="row" v-if="index === 0" :rowspan="props.group.items.length" class="Table-headerRow">{{ day.toLocaleUpperCase() }}</th>
        <td class="Table-rowInfo">{{ item.hour }}</td>
        <td class="Table-rowInfo">{{ item.house }}</td>
        <td class="Table-rowInfo">{{ item.territory.nro }}</td>
        <td class="Table-rowInfo">{{ item.captain }}</td>
    </tr>
</template>
<script setup lang="ts">
    import { computed } from 'vue';
    import dayjs from 'dayjs';
    import type Task from '../../interfaces/Task';

    interface Props{
        group: { groupName: string, items: Task[] }
    }

    const props = defineProps<Props>()

    const day = computed(() => dayjs(props.group.groupName).format("dddd DD-MM"));
</script>   
<styles lang='scss' scoped>

</styles>../../interfaces/Task -->