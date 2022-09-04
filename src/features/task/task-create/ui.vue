<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { TaskModel } from "entities/task";

const store = TaskModel.useTasksStore();

const taskData = ref({
  content: '',
  title: '',
  isDone: false
});

// methods
const createTask = () => {
  store.createTask(taskData.value);
}
</script>

<template>
  <input type="text" v-model="taskData.title">
  <input type="text" v-model="taskData.content">
  <button @click="createTask">Create</button>
</template>