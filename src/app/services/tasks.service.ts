import { Injectable } from '@angular/core';
import { Task } from '../pages/todo/types/Task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  addTask(task: Task) {
    const tasks = this.getAllTasks();
    //check if task with same ID already exist
    const existingTask = tasks.find((t) => t.id === task.id);
    if (existingTask) {
      alert('Task with same ID already exist');
      return;
    }
    tasks.push(task);
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getAllTasks(): Task[] {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    console.log(tasks);
    return tasks;
  }

  getTaskByID(taskID: string): Task | undefined {
    const tasks = this.getAllTasks();
    const task = tasks.find((t) => t.id === taskID);
    return task;
  }

  updateTask(task: Task) {
    const tasks = this.getAllTasks();
    const index = tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      tasks[index] = task;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  // deleteTaskByID(taskID: string) {
  //   const tasks = this.getAllTasks();
  //   const index = tasks.findIndex((t) => t.id === taskID);
  //   if (index !== -1) {
  //     tasks.splice(index, 1);
  //     localStorage.setItem('tasks', JSON.stringify(tasks));
  //   }
  // }

  deleteTaskByID(taskID: string) {
    const tasks = this.getAllTasks();
    localStorage.setItem(
      'tasks',
      JSON.stringify(tasks.filter((task) => task.id !== taskID))
    );
  }
}
