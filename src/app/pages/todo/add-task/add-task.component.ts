import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';
import { Router } from '@angular/router';
import { Task } from '../types/Task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  tasksService = inject(TasksService);
  router = inject(Router);

  taskForm = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    description: new FormControl(''),
  });

  addTask(e: Event) {
    e.preventDefault()
    
    if (this.taskForm.invalid) {
      alert('Form is invalid');
      return;
    }
    console.log(this.taskForm.value);
    const task = {
      ...this.taskForm.value,
      isComplete: false,
      id: Date.now().toString(),
    };
    this.tasksService.addTask(task as Task);
    this.router.navigateByUrl('/');
    
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }
}
