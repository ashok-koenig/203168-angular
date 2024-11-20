import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, Test2Component, PipesDemoComponent, RegisterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'di-pipe-demo-app';
}
