import { Component, inject } from '@angular/core';
import { ListItemComponent } from './components/list-item/list-item.component';
import { Router, RouterLink } from '@angular/router';
import { Task } from '../types/Task.model';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListItemComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  router = inject(Router);
  tasksService = inject(TasksService);
  tasks: Task[] = [
      {
        id: '1',
        title: 'Grocery Shopping',
        description: 'Buy milk, eggs, bread, and cheese from the store.',
        isComplete: false,
      },
      {
        id: '2',
        title: 'Book Doctor Appointment',
        description: 'Schedule a check-up appointment with Dr. Smith.',
        isComplete: true,
      },
      {
        id: '3',
        title: 'Pay Bills',
        description: 'Pay electricity and internet bills.',
        isComplete: false,
      },
  ];
  
  ngOnInit(): void {
    this.tasks = this.tasksService.getAllTasks();
  }

  completeTaskHandler(taskID: string) {
    const index = this.tasks.findIndex((t) => t.id === taskID);
    if (index !== -1) {
      this.tasks[index].isComplete = !this.tasks[index].isComplete;
    }
    this.tasksService.updateTask(this.tasks[index]);
    this.tasks = this.tasksService.getAllTasks();
  }

  deleteTask(taskID: string) {
    this.tasksService.deleteTaskByID(taskID);
    this.tasks = this.tasksService.getAllTasks();
  }
}

