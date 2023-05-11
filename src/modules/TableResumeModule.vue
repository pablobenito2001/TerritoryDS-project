<template>
    <ResumeTableLayout>
        <TaskTableResume 
        v-for="(group, index) in store.getGroup"
        :key="index"
        :group="group"
        />
    </ResumeTableLayout>
</template>
<script lang='ts' setup>
    import ResumeTableLayout from "../layout/ResumeTableLayout.vue";
    import TaskTableResume from "../components/task/TaskTableResume.vue";

    import { useTaskStore } from "../store/taskStore";

    const store = useTaskStore();
</script>
<styles lang='scss' scoped>

</styles>