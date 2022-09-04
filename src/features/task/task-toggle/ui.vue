<script lang="ts" setup>
import { TaskModel } from 'entities/task';
import { toRefs } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  taskId: {
    type: Number,
    default: 0,
  }
});

const { modelValue, taskId } = toRefs(props);
const store = TaskModel.useTasksStore();

// methods
const handleToggle = (event: Event) => {
  const value = (event.target as HTMLInputElement).checked;
  
  store.setIsDone(value, taskId.value);
}
</script>

<template>
  <input type="checkbox" :value="modelValue" @input="handleToggle">
</template>