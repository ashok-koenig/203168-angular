import { Component } from '@angular/core';
import { HelloComponent } from "./hello/hello.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'module-dome-app'
}
