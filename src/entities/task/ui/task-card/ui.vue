<script lang="ts" setup>
import { toRefs } from 'vue';
import type { Task } from 'entities/task/model/tasks';

const props = defineProps<{
  task: Task,
}>();

const { task } = toRefs(props);
</script>

<template>
  <div v-if="task">
    <h1>{{ task.title }}</h1>
    <p>{{ task.content }}</p>
    <slot name="actions"></slot>
  </div>
</template>