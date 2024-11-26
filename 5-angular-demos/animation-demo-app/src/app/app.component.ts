import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxAminationComponent } from './box-amination/box-amination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoxAminationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animation-demo-app';
}
