import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreationOperatorComponent } from './creation-operator/creation-operator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreationOperatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjs-api-demo-app';
}
