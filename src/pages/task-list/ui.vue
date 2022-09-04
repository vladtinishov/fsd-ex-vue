<script lang="ts" setup>
import { TaskModel, TaskRow } from 'entities/task';
import { TaskDelete, TaskToggle } from 'features/task';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const store = TaskModel.useTasksStore();
const { tasks } = storeToRefs(store);
</script>

<template>
  <RouterLink to="new">create</RouterLink>
  <TaskRow v-for="task in tasks" :key="task.id">
    <template #header><RouterLink :to="`/${task.id}`">{{ task.title }}</RouterLink></template>
    <template #body>{{ task.content }}</template>
    <template #action>
      <TaskToggle :modelValue="task.isDone" :taskId="task.id" />
      <TaskDelete :taskId="task.id" />
    </template>
  </TaskRow>
</template>