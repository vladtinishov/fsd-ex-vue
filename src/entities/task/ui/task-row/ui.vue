<script lang="ts" setup>
import { toRefs } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const { title } = toRefs(props);
</script>

<template>
  <div>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="action"></slot>
  </div>
</template>