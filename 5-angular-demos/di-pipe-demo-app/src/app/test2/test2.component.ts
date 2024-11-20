import { Component } from '@angular/core';
import { CalculateService } from '../services/calculate.service';

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css',
  // providers:[CalculateService]
})
export class Test2Component {
  result: number= 0;
  constructor(private calcService: CalculateService){

  }
  handleClick(){
    this.result = this.calcService.getResult()
  }
}
