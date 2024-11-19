import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'binding-demo-app';
}
