import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from '../../../types/Task.model';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  router = inject(Router);

  @Input() task: Task | null = null;
  @Output() taskCompleter = new EventEmitter<string>();
  @Output() taskDeleter = new EventEmitter<string>();

  completeTaskHandler() {
    if (this.task && this.task.id) {
      
      this.taskCompleter.emit(this.task.id);
    }

  }
  readMore() {
    if (this.task && this.task.id) {
      this.router.navigateByUrl(`/${this.task.id}`);
    }
  }
  deleteTask() {
    if (this.task && this.task.id) {
      this.taskDeleter.emit(this.task.id);
    }
  }
}
