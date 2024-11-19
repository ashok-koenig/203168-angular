import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  webUrl: string = "https://www.google.com"
  picUrl: string = "images/pic1.jpg"
  width: number = 150
  isDisabled: boolean = false
}
