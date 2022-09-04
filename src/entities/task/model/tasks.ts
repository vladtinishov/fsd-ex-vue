import { defineStore } from 'pinia';

export type Task = {
  id?: number;
  title: string;
  content: string;
  isDone: boolean;
}

export const useTasksStore = defineStore('tasks', {
  state: () => {
    return {
      task: {} as Task | undefined,
      tasks: [
        { id: 1, title: 'title1', content: 'some task1', isDone: false },
        { id: 2, title: 'title2', content: 'some task2', isDone: false },
        { id: 3, title: 'title3', content: 'some task3', isDone: false },
        { id: 4, title: 'title4', content: 'some task4', isDone: false },
      ] as Task[]
    }
  },
  actions: {
    setIsDone(value: boolean, taskId: number) {
      const task = this.tasks.find(t => t.id === taskId);
      
      if (!task) return;
      task.isDone = value;
    },
    deleteTask(taskId: number) {
      this.tasks = this.tasks.filter(t => t.id != taskId);
    },
    getTask(taskId: number) {
      this.task = this.tasks.find(t => t.id === taskId);
    },
    createTask(task: Task) {
      const taskCopy = { ...task };
      taskCopy.id = this.tasks.length + 1;
      this.tasks.push(taskCopy);
    }
  }
})