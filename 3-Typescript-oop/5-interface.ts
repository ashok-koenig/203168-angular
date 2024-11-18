interface ICalculator{
    num1: number;
    num2: number;
    num3?: number; // Optional property
    sum():number;
}

class Calculator implements ICalculator{
    num1: number;
    num2: number;
    constructor(num1, num2){
        this.num1 = num1
        this.num2 = num2
    }
    sum(): number {
        return this.num1 + this.num2
    }    
}

var calc = new Calculator(10, 20)
console.log(`Sum is ${calc.sum()}`);
