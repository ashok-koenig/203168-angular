import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
@Input() tasks:Task[] = []
@Output() removeTaskEvent = new EventEmitter<number>()

changeStatus(index: number, status: boolean){
  this.tasks[index].completed = !status
}

handleRemoveTask(index: number){
  this.removeTaskEvent.emit(index)
}
}
