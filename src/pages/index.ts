import Routing from './index.vue'
import { TaskList } from "./task-list";
import type { RouteRecordRaw } from "vue-router";
import { TaskDetail } from "./task-detail";
import { TaskForm } from './task-form';

export const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/', component: TaskList },
  { path: '/new', component: TaskForm },
  { path: '/:id', component: TaskDetail },
];

export { Routing }