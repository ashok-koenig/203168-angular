import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

export interface Task{
  title: string;
  priority: number;
  completed: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  taskList: Task[] = []
  newTask: string = ''
  newPriority: number = 2
  addTask() {
    if(this.newTask){
      this.taskList.push({title: this.newTask,priority: Number(this.newPriority) , completed: false})
      this.newTask = ''
    }
  }
  removeTask(index: number){
    this.taskList.splice(index, 1)
  }
}
