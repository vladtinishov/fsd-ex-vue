<script lang="ts" setup>
import { TaskModel } from "entities/task";


const props = defineProps({
  taskId: {
    type: Number,
    default: 0,
  }
});

const store = TaskModel.useTasksStore();

// methods
const handleDelete = () => {
  store.deleteTask(props.taskId);
}
</script>

<template>
  <button @click="handleDelete">delete</button>
</template>