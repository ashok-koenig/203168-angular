import { Component } from '@angular/core';
import { BlogsComponent } from '../pages/blogs/blogs.component';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [BlogsComponent],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

}
