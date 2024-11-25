import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreationOperatorComponent } from './creation-operator/creation-operator.component';
import { ProductsComponent } from './products/products.component';
import { TransformationOperatorComponent } from "./transformation-operator/transformation-operator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreationOperatorComponent, ProductsComponent, TransformationOperatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjs-api-demo-app';
}
