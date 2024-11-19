import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() parentMessage: string =''
@Output() messageEvent = new EventEmitter<string>()

sendMessage(){
  this.messageEvent.emit('Hello Parent')
}
}
