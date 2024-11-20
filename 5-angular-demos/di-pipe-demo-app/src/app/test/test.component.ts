import { Component } from '@angular/core';
import { CalculateService } from '../services/calculate.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  result: number = 0
  constructor(private calcService: CalculateService){

  }
  handleClick(){
    this.result = this.calcService.sum(100,200)
  }
}
