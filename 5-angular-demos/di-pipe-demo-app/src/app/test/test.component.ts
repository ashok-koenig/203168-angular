import { Component, inject } from '@angular/core';
import { CalculateService } from '../services/calculate.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  // providers: [CalculateService]
})
export class TestComponent {
  result: number = 0
  price: number =0;
  quantity: number = 0;
  offer: number = 0;
  private calcService: CalculateService = inject(CalculateService)
  // constructor(private calcService: CalculateService){

  // }
  handleClick(){
    this.result = this.calcService.sum(100,200)
  }
  totalCostHandler(){
   this.result =  this.calcService.totalCost(this.price, this.quantity, this.offer)
  }
}
