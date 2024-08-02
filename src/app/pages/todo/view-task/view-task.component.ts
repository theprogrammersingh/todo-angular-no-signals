import { Component, inject } from '@angular/core';
import { TasksService } from '../../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../types/Task.model';

@Component({
  selector: 'app-view-task',
  standalone: true,
  imports: [],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.scss'
})
export class ViewTaskComponent {
  tasksService = inject(TasksService);
  route = inject(ActivatedRoute);

  task!: Task | undefined;

  ngOnInit(): void {
    const taskID = this.route.snapshot.params['taskID'];
    this.task = this.tasksService.getTaskByID(taskID);
    console.log(this.task)
  }
}
