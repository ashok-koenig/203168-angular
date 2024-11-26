import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxAminationComponent } from './box-amination/box-amination.component';
import { FadeDemoComponent } from './fade-demo/fade-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoxAminationComponent, FadeDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animation-demo-app';
}
