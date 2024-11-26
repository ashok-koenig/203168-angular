import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-box-amination',
  standalone: true,
  imports: [],
  templateUrl: './box-amination.component.html',
  styleUrl: './box-amination.component.css',
  animations: [
    trigger('boxState', [
      state('default', style({transform: 'scale(1)', backgroundColor: 'blue'})),
      state('expanded', style({transform: 'scale(1.5', backgroundColor: 'green' })),
      transition('default <=> expanded', animate('1s ease-in-out'))
    ])
  ]
})
export class BoxAminationComponent {
  state: string = 'default';
  toggleState(){
    this.state = this.state == 'default'? 'expanded' : 'default'
  }

}
