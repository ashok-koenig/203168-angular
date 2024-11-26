import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.css'
})
export class ButtonDemoComponent {

}
