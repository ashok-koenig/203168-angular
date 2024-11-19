import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css'
})
export class DirectivesDemoComponent {
  nameList: string[] = ["John", "Peter", "Smith", "Ana"]
  // nameList: string[] = []
  isVisible: boolean = true;
  isHighlighted: boolean = false
  textColor: string = "red";
  fontSize: number = 20;

  toggleVisibility(){
    this.isVisible = !this.isVisible
  }
  toggleHighlight(){
    this.isHighlighted = !this.isHighlighted
  }

}
