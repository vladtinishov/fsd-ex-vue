<script lang="ts" setup>
import { TaskCard, TaskModel } from "entities/task";
import { TaskDelete, TaskToggle } from "features/task";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = TaskModel.useTasksStore();

onMounted(() => store.getTask(+route.params.id));

// computed
const { task } = storeToRefs(store);

</script>

<template>
  <TaskCard :task="task" v-if="task">
    <template #actions>
      <TaskDelete :taskId="task.id" />
      <TaskToggle :taskId="task.id" :modelValue="task?.isDone" />
    </template>
  </TaskCard>
</template>