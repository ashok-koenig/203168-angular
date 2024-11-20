import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SummaryPipe } from '../pipes/summary.pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule, SummaryPipe],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {
  course = {
    title: "Angular",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio temporibus illo deleniti ipsum unde nostrum omnis nulla et? Voluptatem unde possimus, architecto ex voluptatibus consequatur magni omnis expedita vitae error.",
    numberOfStudents: 33232,
    ratings: 4.75897,
    price: 34334,
    startDate: new Date()
  }
}
