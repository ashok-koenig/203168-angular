import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  private result: number = 0;
  constructor() { }
  sum(num1: number, num2: number): number{
    this.result= num1 + num2;
    return this.result;
  }
  getResult(): number{
    return this.result;
  }
}
