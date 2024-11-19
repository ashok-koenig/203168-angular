import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, DirectivesDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'binding-demo-app';
}
