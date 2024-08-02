import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() isComplete: boolean = false
  @Output() isCompleteChange = new EventEmitter<boolean>();

  toggleIsComplete() {
    this.isComplete = !this.isComplete;
    this.isCompleteChange.emit(this.isComplete);
  }
}
