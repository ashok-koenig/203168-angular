import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fade-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fade-demo.component.html',
  styleUrl: './fade-demo.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('1s ease-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class FadeDemoComponent {
  isVisible = true;
  toggle(){
    this.isVisible = !this.isVisible
  }
}
